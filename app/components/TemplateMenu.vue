<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Guide',
      icon: 'i-lucide-book-open',
      to: '/docs/getting-started'
    },
    {
      label: 'Composables',
      icon: 'i-lucide-database',
      to: '/docs/composables'
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      to: '/docs/components',
      active: true
    }
  ]
])
</script>

<template>
  <UNavigationMenu color="neutral" :items="items" class="w-full" />
</template>
