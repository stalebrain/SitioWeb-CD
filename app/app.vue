<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Taquería: El Callejón de Dany'
const description = 'Descripciónnnn'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'INICIO',
      icon: 'i-lucide-box',
      to: '/docs/getting-started'
    },
    {
      label: 'MENÚ',
      icon: 'i-lucide-book-open',
      to: '/docs/composables'
    },
    {
      label: 'NOSOTROS',
      icon: 'i-lucide-user',
      to: '/docs/components',
      active: true
    }
  ]
])
</script>

<template>
  <UApp>
    <UHeader class="bg-[#e52463] text-[#ffffff]">
      <template #title>
        Taquería: El Callejón de Dany
      </template>
      <template #right>
        <UNavigationMenu color="primary" :items="items" />
      </template>
    </UHeader>

    <UMain class="bg-[#fac51c]">
      <NuxtPage />
    </UMain>

    <UFooter class="my-10">
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-facebook"
          aria-label="Facebook"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-instagram"
          aria-label="Instagram"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
