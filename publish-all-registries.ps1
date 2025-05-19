# Vérifier que .env existe
if (-Not (Test-Path -Path ".env")) {
  Write-Error "Fichier .env introuvable. Assurez-vous qu'il contient GITHUB_TOKEN et NPM_TOKEN."
  exit 1
}

# Charger les variables d'environnement
Get-Content .env | ForEach-Object {
  if ($_ -and -not $_.StartsWith('#')) {
    $pair = $_ -split '='
    if ($pair.Length -eq 2) {
      [Environment]::SetEnvironmentVariable($pair[0].Trim(), $pair[1].Trim())
    }
  }
}

# Vérifier que les variables
if (-not $env:GITHUB_TOKEN -or -not $env:NPM_TOKEN) {
  Write-Error "GITHUB_TOKEN ou NPM_TOKEN non défini dans le fichier .env"
  exit 1
}

Write-Host "Variables d'environnement chargées."

# Variables GitHub
$GITHUB_USERNAME = "ProGestionSoft"
$REPO_NAME = "ui-kit"

Write-Host "Incrémentation des versions..."
pnpm -r exec -- npm version patch --no-git-tag-version

Write-Host "Construction des packages..."
pnpm build

# Publier sur NPM
Write-Host "Publication sur NPM..."

# Écrire le fichier .npmrc pour NPM
@"
//registry.npmjs.org/:_authToken=$env:NPM_TOKEN
auto-install-peers=true
strict-peer-dependencies=false
"@ | Set-Content .npmrc -Encoding UTF8

# Met à jour publishConfig dans chaque package.json sous packages/*
Get-ChildItem packages/*/package.json | ForEach-Object {
  $json = Get-Content $_.FullName -Encoding UTF8 | ConvertFrom-Json

  # publishConfig minimal pour npm public
  $json.publishConfig = @{ access = "public" }

  # Supprimer repository si inutile ou le garder intact si présent
  $json | ConvertTo-Json -Depth 10 | Set-Content $_.FullName -Encoding UTF8
}

Write-Host "Publication sur NPM en cours..."
pnpm -r publish --no-git-checks

# Publier sur GitHub Packages
Write-Host "Publication sur GitHub Packages..."

# Écrire le fichier .npmrc pour GitHub Packages
@"
//npm.pkg.github.com/:_authToken=$env:GITHUB_TOKEN
@progestionsoft:registry=https://npm.pkg.github.com/
auto-install-peers=true
strict-peer-dependencies=false
"@ | Set-Content .npmrc -Encoding UTF8

# Met à jour publishConfig et repository dans chaque package.json sous packages/*
Get-ChildItem packages/*/package.json | ForEach-Object {
  $pkgDir = $_.Directory.Name
  $json = Get-Content $_.FullName -Raw | ConvertFrom-Json

  # publishConfig pour GitHub Packages
  $json.publishConfig = @{ registry = "https://npm.pkg.github.com"; access = "public" }

  # Assurer que repository est un objet avant d'écrire dedans
  if (-not $json.PSObject.Properties.Name.Contains("repository")) {
    $json | Add-Member -MemberType NoteProperty -Name repository -Value @{}
  }

  $json.repository.type = "git"
  $json.repository.url = "git+https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
  $json.repository.directory = "packages/$pkgDir"

  $json | ConvertTo-Json -Depth 10 | Set-Content $_.FullName -Encoding UTF8
}

Write-Host "Publication sur GitHub Packages en cours..."
pnpm -r publish --no-git-checks --registry=https://npm.pkg.github.com/ --access public

Write-Host "Publication terminée sur NPM et GitHub Packages"

# Restaurer .npmrc par défaut
@"
auto-install-peers=true
strict-peer-dependencies=false
"@ | Set-Content .npmrc -Encoding UTF8

Write-Host "Configuration .npmrc restaurée."
