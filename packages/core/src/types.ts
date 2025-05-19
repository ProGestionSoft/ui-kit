/* Options pour configurer le hook usePagination */
export interface PaginationOptions {
  totalItems: number
  itemsPerPage: number
  currentPage?: number
  visiblePageCount?: number
}

/* Options pour configurer le hook useExpText */
export interface UseExpTextOptions {
  text: string
  maxLength?: number
}

/* Options pour configurer le hook useBreadcrumb */
export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: any
}


/* Pour les utilitaires généraux */
export type Nullable<T> = T | null