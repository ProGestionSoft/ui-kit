import { computed, ref, type Ref } from 'vue'
import type { Component } from 'vue'

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: Component
}

export interface UseBreadcrumbOptions {
  items?: Ref<BreadcrumbItem[]> | BreadcrumbItem[]
  defaultItem?: BreadcrumbItem
}

export interface UseBreadcrumbReturn {
  items: Ref<BreadcrumbItem[]>
  updateItems: (newItems: BreadcrumbItem[]) => void
}

export function useBreadcrumb(options: UseBreadcrumbOptions = {}): UseBreadcrumbReturn {
  const defaultBreadcrumbItem: BreadcrumbItem = {
    label: 'Accueil',
    href: '/',
    icon: options.defaultItem?.icon || undefined
  }

  const itemsRef = options.items 
    ? 'value' in options.items 
      ? options.items 
      : ref(options.items)
    : ref([])

  const mergedItems = computed(() => [
    { ...defaultBreadcrumbItem, ...options.defaultItem },
    ...itemsRef.value
  ])

  const updateItems = (newItems: BreadcrumbItem[]) => {
    itemsRef.value = newItems
  }

  return {
    items: mergedItems,
    updateItems
  }
}