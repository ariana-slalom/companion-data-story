<template>
  <component :is="tag" ref="rootEl" class="reveal" :class="{ 'is-visible': isVisible }">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

withDefaults(defineProps<{ tag?: string }>(), { tag: 'div' })

const rootEl = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const el = rootEl.value
  if (!el) return
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )
  observer.observe(el)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
