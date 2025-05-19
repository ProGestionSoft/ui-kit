# @progestionsoft/use-pagination
Un composable Vue 3 simple et flexible pour implémenter des systèmes de pagination dans vos applications.

## Fonctionnalités
- Calcul dynamique des pages  
- Visualisation de la fenêtre de pages avec points de suspension  
- Compatible côté serveur et côté client  
- Support complet de TypeScript 

## Comment l'utiliser
### 1. Installation
```bash
npm install @progestionsoft/use-pagination
```

### 2. Importation dans un composant Vue
```bash
import { usePagination } from '@progestionsoft/use-pagination'
```

### 3. Utilisation de base
```vue
<script setup>
const { 
  currentPage,
  totalPages,
  visiblePages,
  nextPage,
  prevPage
} = usePagination({
  totalItems: 100,
  itemsPerPage: 10
})
</script>
```

## API
### Option

| Propriété        | Type          | Par défaut | Description                         |
| ---------------- | ------------- | ---------- | ----------------------------------- |
| totalItems       | `Ref<number>` | Requis     | Nombre total d'éléments             |
| itemsPerPage     | `Ref<number>` | Requis     | Nombre d'éléments par page          |
| currentPage      | `Ref<number>` | 1          | Page courante initiale              |
| visiblePageCount | `number`      | 5          | Nombre de boutons de pages visibles |


### Valeurs retournées

| Propriété    | Type                     | Description                                         |
| ------------ | ------------------------ | --------------------------------------------------- |
| currentPage  | `Ref<number>`            | Page active courante                                |
| itemsPerPage | `Ref<number>`            | Nombre d'éléments par page                          |
| totalPages   | `Ref<number>`            | Nombre total de pages                               |
| startItem    | `Ref<number>`            | Numéro du premier élément de la page courante       |
| endItem      | `Ref<number>`            | Numéro du dernier élément de la page courante       |
| visiblePages | `Ref<number[]>`          | Tableau des numéros de pages visibles               |
| showEllipsis | `Ref<boolean>`           | Affiche les points de suspension dans la pagination |
| nextPage     | `() => void`             | Aller à la page suivante                            |
| prevPage     | `() => void`             | Revenir à la page précédente                        |
| goToPage     | `(page: number) => void` | Aller à une page spécifique                         |
| paginate     | `<T>(items: T[]) => T[]` | Fonction d'aide pour paginer un tableau             |


##  Exemple avancé
```vue
<template>
  <div v-if="posts">
    <div v-for="post in pagination.paginate(posts)" :key="post.id">
      {{ post.title }}
    </div>

    <div class="pagination-controls">
      <button @click="pagination.prevPage" :disabled="currentPage === 1">Précédent</button>
      
      <button 
        v-for="page in pagination.visiblePages" 
        :key="page"
        @click="pagination.goToPage(page)"
        :class="{ active: pagination.currentPage === page }"
      >
        {{ page }}
      </button>
      
      <button @click="pagination.nextPage" :disabled="currentPage === totalPages">Suivant</button>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch('/api/posts')
const totalItems = computed(() => posts.value?.length || 0)

const pagination = usePagination({
  totalItems,
  itemsPerPage: ref(10)
})
</script>
```