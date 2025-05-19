# PGS Packages

[![License](https://img.shields.io/github/license/ProGestionSoft/Packages)](https://github.com/ProGestionSoft/Packages/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/ProGestionSoft/Packages)](https://github.com/ProGestionSoft/Packages/issues)
[![Stars](https://img.shields.io/github/stars/ProGestionSoft/Packages?style=social)](https://github.com/ProGestionSoft/Packages/stargazers)
![Last commit](https://img.shields.io/github/last-commit/ProGestionSoft/Packages?style=flat-square)
![Size](https://img.shields.io/github/repo-size/ProGestionSoft/Packages?style=flat-square)
![Contributors](https://img.shields.io/github/contributors/ProGestionSoft/Packages?style=flat-square)

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
| `useSocialLink` | Hook pour générer des liens vers les réseaux sociaux       | Composable |
| `errorPage`     | Composant Vue pour gérer les pages d'erreur personnalisées | Composant  |
| `footerModel`   | Pied de page standardisé avec configuration facile         | Composant  |

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
    ├── useBreadcrumb/
    ├── usePagination/
    ├── useExpText/
    ├── useSocialLink/
    ├── errorPage/
    └── footerModel/
```

## Versionnage et téléchargement

| Package                                                                                            | Version                                                              | Downloads                                                             |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------|
| [`@progestionsoft/use-breadcrumb`](https://www.npmjs.com/package/@progestionsoft/use-breadcrumb)   | ![npm](https://img.shields.io/npm/v/@progestionsoft/use-breadcrumb)  | ![npm](https://img.shields.io/npm/dm/@progestionsoft/use-breadcrumb)  |
| [`@progestionsoft/use-pagination`](https://www.npmjs.com/package/@progestionsoft/use-pagination)   | ![npm](https://img.shields.io/npm/v/@progestionsoft/use-pagination)  | ![npm](https://img.shields.io/npm/dm/@progestionsoft/use-pagination)  |
| [`@progestionsoft/use-exp-text`](https://www.npmjs.com/package/@progestionsoft/use-exp-text)       | ![npm](https://img.shields.io/npm/v/@progestionsoft/use-exp-text)    | ![npm](https://img.shields.io/npm/dm/@progestionsoft/use-exp-text)    |
| [`@progestionsoft/use-social-link`](https://www.npmjs.com/package/@progestionsoft/use-social-link) | ![npm](https://img.shields.io/npm/v/@progestionsoft/use-social-link) | ![npm](https://img.shields.io/npm/dm/@progestionsoft/use-social-link) |
| [`@progestionsoft/error-page`](https://www.npmjs.com/package/@progestionsoft/error-page)           | ![npm](https://img.shields.io/npm/v/@progestionsoft/error-page)      | ![npm](https://img.shields.io/npm/dm/@progestionsoft/error-page)      |
| [`@progestionsoft/footer-model`](https://www.npmjs.com/package/@progestionsoft/footer-model)       | ![npm](https://img.shields.io/npm/v/@progestionsoft/footer-podel)    | ![npm](https://img.shields.io/npm/dm/@progestionsoft/footer-model)    |


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
- [GitHub Packages](https://github.com/orgs/ProGestionSoft/packages)

## Mainteneur
Développé et maintenu par l’équipe **[PRO GESTION SOFT](https://github.com/progestionsoft)**.
