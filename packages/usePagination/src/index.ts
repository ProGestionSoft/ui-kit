import { ref, computed, type Ref, isRef } from 'vue'

export interface PaginationOptions {
  totalItems: Ref<number> | number
  itemsPerPage: Ref<number> | number
  currentPage?: Ref<number> | number
  visiblePageCount?: number
}

export interface PaginationResult {
  currentPage: Ref<number>
  itemsPerPage: Ref<number>
  totalPages: Ref<number>
  startItem: Ref<number>
  endItem: Ref<number>
  visiblePages: Ref<number[]>
  showEllipsis: Ref<boolean>
  nextPage: () => void
  prevPage: () => void
  goToPage: (page: number) => void
  paginate: <T>(items: T[]) => T[]
}

export function usePagination(options: PaginationOptions): PaginationResult {
  const currentPage = ref(
    options.currentPage !== undefined
      ? isRef(options.currentPage)
        ? options.currentPage.value
        : options.currentPage
      : 1
  )
  const itemsPerPage = ref(
    isRef(options.itemsPerPage)
      ? options.itemsPerPage.value
      : options.itemsPerPage
  )
  const visiblePageCount = options.visiblePageCount ?? 5

  const totalPages = computed(() => {
    const total = isRef(options.totalItems)
      ? options.totalItems.value
      : options.totalItems
    return Math.ceil(total / itemsPerPage.value)
  })

  const startItem = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1)

  const endItem = computed(() => {
    const total = isRef(options.totalItems)
      ? options.totalItems.value
      : options.totalItems
    return Math.min(currentPage.value * itemsPerPage.value, total)
  })

  const visiblePages = computed(() => {
    const pages: number[] = []
    let start = Math.max(1, currentPage.value - Math.floor(visiblePageCount / 2))
    let end = Math.min(totalPages.value, start + visiblePageCount - 1)

    if (end - start < visiblePageCount - 1) {
      start = Math.max(1, end - visiblePageCount + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    return pages
  })

  const showEllipsis = computed(() =>
    totalPages.value > visiblePageCount &&
    currentPage.value < totalPages.value - Math.floor(visiblePageCount / 2)
  )

  function nextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  function prevPage() {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  function paginate<T>(items: T[]): T[] {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return items.slice(start, end)
  }

  return {
    currentPage,
    itemsPerPage,
    totalPages,
    startItem,
    endItem,
    visiblePages,
    showEllipsis,
    nextPage,
    prevPage,
    goToPage,
    paginate
  }
}
