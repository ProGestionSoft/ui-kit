import { ref, computed, type Ref, isRef } from 'vue'

export interface UseExpTextOptions {
  text: Ref<string> | string
  maxLength?: Ref<number> | number
}

export interface UseExpTextReturn {
  truncatedText: Ref<string>
  expanded: Ref<boolean>
  toggleExpanded: () => void
  isTruncatable: Ref<boolean>
}

export function useExpText(options: UseExpTextOptions): UseExpTextReturn {
  const expanded = ref(false)
  const defaultMaxLength = 300

  const maxLength = computed(() => {
    if (typeof options.maxLength === 'undefined') return defaultMaxLength
    return isRef(options.maxLength) 
      ? options.maxLength.value 
      : options.maxLength
  })

  const sourceText = computed(() => {
    return isRef(options.text)
      ? options.text.value
      : options.text
  })

  const isTruncatable = computed(() => {
    return sourceText.value.length > maxLength.value
  })

  const truncatedText = computed(() => {
    if (expanded.value || !isTruncatable.value) {
      return sourceText.value
    }
    return sourceText.value.slice(0, maxLength.value) + '...'
  })

  const toggleExpanded = () => {
    expanded.value = !expanded.value
  }

  return {
    truncatedText,
    expanded,
    toggleExpanded,
    isTruncatable
  }
}
