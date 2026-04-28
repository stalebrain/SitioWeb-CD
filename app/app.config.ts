export default defineAppConfig({
  ui: {
    tokens: {
      page: {
        hero: { title: 'text-black' },
        section: { title: 'text-black' },
        cta: { title: 'text-black' }
      }
    },
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
    },
    colors: {
      neutral: '--color-bg',
      primary: '--color-accent',
      secondary: '--color-accent-secondary'
    }
  }
})
