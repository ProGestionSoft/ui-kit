# @progestionsoft/use-exp-text
Un composable Vue 3 simple et flexible pour une gestion de la troncature de texte avec fonctionnalité d'expansion/repli

## Fonctionnalités
- Troncature dynamique du texte  
- Bascule entre états développé/replié  
- Ajout automatique de points de suspension  
- Support complet de TypeScript  

## Comment l'utiliser
### 1. Installation
```bash
npm install @progestionsoft/use-exp-text
```

### 2. Importation dans un composant Vue
```bash
import { useExpText } from '@progestionsoft/use-exp-text'
```

### 3. Utilisation de base
```vue
<template>
  <div>
    <div v-html="truncatedText" />
    <button 
      v-if="isTruncatable" 
      @click="toggleExpanded"
      class="text-primary hover:underline"
    >
      {{ expanded ? 'Afficher moins' : 'Afficher plus' }}
    </button>
  </div>
</template>

<script setup>
import { useExpText } from '@progestionsoft/use-exp-text'

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper elit justo. Aliquam lacinia, quam at iaculis bibendum, ex lectus laoreet metus, ut scelerisque lorem metus ac nunc. Nulla cursus tortor id elit condimentum facilisis. Nullam semper, dui sit amet sagittis aliquet, ipsum ipsum consectetur urna, eget finibus quam arcu molestie lectus. Morbi tincidunt nisi et suscipit suscipit. Curabitur sit amet eleifend ipsum. Maecenas condimentum suscipit elit et iaculis. Aliquam vel tortor tellus. Donec porttitor ligula id ante lobortis, non auctor nisl cursus. Donec eu sem eget tellus ornare gravida eget sit amet dolor. Sed lacinia placerat ligula, dictum placerat leo ultrices id.'

const { 
  truncatedText,
  expanded,
  toggleExpanded,
  isTruncatable
} = useExpText({
  text: longText,
  maxLength: 150
})
</script>
```

## API
### Option

| Propriété | Type          | Par défaut | Description                        |
| --------- | ------------- | ---------- | ---------------------------------- |
| text      | `Ref<string>` | Requis     | Texte à tronquer                   |
| maxLength | `Ref<number>` | 300        | Longueur maximale avant troncature |


### Valeurs retournées

| Propriété      | Type           | Description                                  |
| -------------- | -------------- | -------------------------------------------- |
| truncatedText  | `Ref<string>`  | Texte tronqué avec points de suspension      |
| expanded       | `Ref<boolean>` | État actuel d'expansion                      |
| toggleExpanded | `() => void`   | Permet de basculer l'état d'expansion        |
| isTruncatable  | `Ref<boolean>` | Indique si le texte nécessite une troncature |


##  Exemple avancé
```vue
<script setup>
const { data: article } = await useFetch('/api/article')

const { 
  truncatedText,
  expanded,
  toggleExpanded,
  isTruncatable
} = useExpText({
  text: computed(() => article.value?.content || ''),
  maxLength: 500
})
</script>

<template>
  <div>
    <div class="prose" v-html="truncatedText" />
    <button
      v-if="isTruncatable"
      @click="toggleExpanded"
      class="mt-2 text-sm text-primary hover:text-secondary"
    >
      <IconChevronDown v-if="!expanded" class="w-4 h-4" />
      <IconChevronUp v-else class="w-4 h-4" />
      {{ expanded ? 'Réduire' : 'Développer' }}
    </button>
  </div>
</template>
```