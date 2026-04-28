<script setup lang="ts">
const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
  <div>
    <UPageHero class="hero-bg">
      <template #title>
        Taquería: El Callejón de Dany
      </template>
    </UPageHero>
    <hr class="bg-[#309bb5]">

    <UPageSection
      id="features"
      title="CONOCENOS"
      description="Start with a solid foundation. This template includes all the essentials for building production-ready applications with Nuxt UI's powerful component system."
      :features="[{
        icon: 'i-lucide-rocket',
        title: 'Production-ready from day one',
        description: 'Pre-configured with TypeScript, ESLint, Tailwind CSS, and all the best practices. Focus on building features, not setting up tooling.'
      }, {
        icon: 'i-lucide-palette',
        title: 'Beautiful by default',
        description: 'Leveraging Nuxt UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.'
      }, {
        icon: 'i-lucide-zap',
        title: 'Lightning fast',
        description: 'Optimized for performance with SSR/SSG support, automatic code splitting, and edge-ready deployment. Your users will love the speed.'
      }, {
        icon: 'i-lucide-blocks',
        title: '100+ components included',
        description: 'Access Nuxt UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.'
      }, {
        icon: 'i-lucide-code-2',
        title: 'Developer experience first',
        description: 'Auto-imports, hot module replacement, and TypeScript support. Write less boilerplate and ship more features.'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Built for scale',
        description: 'Enterprise-ready architecture with proper error handling, SEO optimization, and security best practices built-in.'
      }]"
    />

    <p class="text-4xl font-bold text-center text-white">
      EXPLORA NUESTRO SABOR!
    </p>

    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      auto-scroll
      :items="items"
      :ui="{ container: 'gap-0', item: 'basis-1/5' }"
    >
      <img
        :src="item"
        width="234"
        height="234"
        class="rounded-lg my-20"
        loading="lazy"
      >
    </UCarousel>

    <hr class="h-2 bg-[#e52463] my-8">
  </div>
</template>
