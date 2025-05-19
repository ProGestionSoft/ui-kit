# PGS Packages

[![License](https://img.shields.io/github/license/ProGestionSoft/ui-kit)](https://github.com/ProGestionSoft/ui-kit/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/ProGestionSoft/ui-kit)](https://github.com/ProGestionSoft/ui-kit/issues)
[![Stars](https://img.shields.io/github/stars/ProGestionSoft/ui-kit?style=social)](https://github.com/ProGestionSoft/ui-kit/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/ProGestionSoft/ui-kit?style=flat-square)](https://github.com/ProGestionSoft/ui-kit/graphs/commit-activity)
![Size](https://img.shields.io/github/repo-size/ProGestionSoft/ui-kit?style=flat-square)
[![Contributors](https://img.shields.io/github/contributors/ProGestionSoft/ui-kit?style=flat-square)](https://github.com/ProGestionSoft/ui-kit/graphs/contributors)

---

Bienvenue dans **PGS Packages**, un dépôt monorepo maintenu par l'équipe **Pro Gestion Soft (PGS)**.  
Ce dépôt regroupe une collection de composants **Vue 3** et de hooks utiles (**composables**) pensés pour être réutilisables dans des projets **Nuxt.js/Tailwind CSS**.  
Il s'adresse à la fois à la **communauté de développeurs PGS** et aux **passionnés de développement web** en quête de productivité.

## Contenu du monorepo
Chaque package est isolé dans le dossier `packages/` et publié séparément sur ***npm*** et ***GitHub Packages***.

| **Package**     | **Description**                                            | **Type**   |
| --------------- | ---------------------------------------------------------- | ---------- |
| `useBreadcrumb` | Hook pour générer dynamiquement des breadcrumbs            | Composable |
| `usePagination` | Hook de pagination simple                                  | Composable |
| `useExpText`    | Hook pour gérer les textes tronqués/expandables            | Composable |


## Technologies utilisées
- [Vue.js](https://vuejs.org/)
- [NuxtJS](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)

## Installation
Chaque package possède sa propre documentation détaillée dans son répertoire. Consultez les README individuels pour plus d'informations sur l'utilisation de chaque package.

- ### depuis NPM
```bash
npm install @progestionsoft/[nom_du_package]
```

- ### depuis GitHub Packages
```bash
npm install @progestionsoft/[nom_du_package]@[version]
```

## Structure du dépôt
Ce dépôt utilise une architecture monorepo avec :
- pnpm workspaces pour la gestion des dépendances
- Packages indépendants versionnés séparément
- Partage de tooling commun

```
pgs-packages/
│
├── pnpm-workspace.yaml
├── package.json
├── README.md.json
├── package.json
└── packages/
    ├── core/
    ├── useBreadcrumb/
    ├── usePagination/
    └── useExpText/
```

## Versionnage et téléchargement

| Package                                                                                          | Version                                                              | Downloads                                                             |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------|
| [@progestionsoft/use-breadcrumb](https://www.npmjs.com/package/@progestionsoft/use-breadcrumb)   | ![npm](https://img.shields.io/npm/v/@progestionsoft/use-breadcrumb)  | ![npm](https://img.shields.io/npm/dm/@progestionsoft/use-breadcrumb)  |
| [@progestionsoft/use-pagination](https://www.npmjs.com/package/@progestionsoft/use-pagination)   | ![npm](https://img.shields.io/npm/v/@progestionsoft/use-pagination)  | ![npm](https://img.shields.io/npm/dm/@progestionsoft/use-pagination)  |
| [@progestionsoft/use-exp-text](https://www.npmjs.com/package/@progestionsoft/use-exp-text)       | ![npm](https://img.shields.io/npm/v/@progestionsoft/use-exp-text)    | ![npm](https://img.shields.io/npm/dm/@progestionsoft/use-exp-text)    |



## Configuration et utilisation
Chaque package contient son propre README avec instructions, exemples d’utilisation, props et options. Veuillez les consulter pour plus de détails

## Contribution
Les contributions sont les bienvenues ! Veuillez suivre notre guide de contribution.
- Forker le dépôt
- Créer une branche (`git checkout -b feature/ma-fonctionnalite`)
- Committer vos changements (`git commit -m 'Ajout d'une super fonctionnalité'`)
- Pousser vers votre branche (`git push origin feature/ma-fonctionnalite`)
- Ouvrir une Pull Request

## Licence
Ce projet est sous licence **MIT**.

## Publication
Ce package est disponible sur :
- [npmjs.com](https://www.npmjs.com/~steveasterafovo)
- [GitHub Packages](https://github.com/orgs/ProGestionSoft/ui-kit)

## Mainteneur
Développé et maintenu par l’équipe **[PRO GESTION SOFT](https://github.com/progestionsoft)**.
