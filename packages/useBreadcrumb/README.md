# @progestionsoft/use-breadcrumb
Composable Vue pour la gestion dynamique de la navigation par fil d’Ariane

## Fonctionnalités
- Génération dynamique du fil d’Ariane  
- Gestion d’un élément par défaut (ex. Accueil)  
- Support complet de TypeScript  
- Compatible Nuxt 3   

## Comment l'utiliser
### 1. Installation
```bash
npm install @progestionsoft/use-breadcrumb
```

### 2. Importation dans un composant Vue
```bash
import { useBreadcrumb } from '@progestionsoft/use-breadcrumb'
```

### 3. Utilisation de base
```vue
<template>
  <nav aria-label="Fil d’Ariane">
    <ol class="flex items-center space-x-4">
      <li v-for="(item, index) in items" :key="index">
        <NuxtLink 
          v-if="item.href" 
          :to="item.href"
          class="text-sm hover:text-primary"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-sm">
          {{ item.label }}
        </span>
        <span v-if="index < items.length - 1" class="text-gray-400">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { useBreadcrumb } from '@progestionsoft/use-breadcrumb'

const { items } = useBreadcrumb({
  items: [
    { label: 'Blog', href: '/blog' },
    { label: 'Article' }
  ]
})
</script>
```

## API
### Option

| Propriété   | Type                    | Par défaut                        | Description                             |
| ----------- | ----------------------- | --------------------------------- | --------------------------------------- |
| items       | `Ref<BreadcrumbItem[]>` | `[]`                              | Tableau des éléments du fil d’Ariane    |
| defaultItem | `BreadcrumbItem`        | `{ label: 'Accueil', href: '/' }` | Élément par défaut du début de la liste |


### Valeurs retournées

| Propriété   | Type                                | Description                               |
| ----------- | ----------------------------------- | ----------------------------------------- |
| items       | `Ref<BreadcrumbItem[]>`             | Liste complète des éléments du breadcrumb |
| updateItems | `(items: BreadcrumbItem[]) => void` | Mise à jour dynamique des éléments        |



##  Exemple avancé
```vue
<template>
  <div>
    <Breadcrumb :items="items" />
    <!-- Contenu de la page -->
  </div>
</template>

<script setup>
const route = useRoute()
const { data: product } = await useFetch(`/api/products/${route.params.id}`)

const { items } = useBreadcrumb({
  items: computed(() => [
    { label: 'Produits', href: '/products' },
    { label: product.value?.category, href: `/products/${product.value?.category}` },
    { label: product.value?.name }
  ])
})
</script>
```