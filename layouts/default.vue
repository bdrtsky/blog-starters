<template>
  <div>
    <TheHeader />
    <main>
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      __dangerouslyDisableSanitizers: ['style'],
      style: [
        {
          cssText: `
          :root {
            --background-color: ${this.$tokens.colorMode.light.backgroundColor};
            --on-background-color: ${this.$tokens.colorMode.light.onBackgroundColor};
            --surface-color: ${this.$tokens.colorMode.light.surfaceColor};
            --elevated-surface-color: ${this.$tokens.colorMode.light.elevatedSurfaceColor};
            --sans-serif-fallback-stack: ${this.$tokens.sanSerifFallbackStack};
            --body-font-family: ${this.$tokens.fonts.body.family}, var(--sans-serif-fallback-stack);
            --body-font-weight: ${this.$tokens.fonts.body.weight};
            --body-font-feature: ${this.$tokens.fonts.body.feature};
            --bold-body-font-family: ${this.$tokens.fonts.boldBody.family}, var(--sans-serif-fallback-stack);
            --bold-body-font-weight: ${this.$tokens.fonts.boldBody.weight};
            --bold-body-font-feature: ${this.$tokens.fonts.boldBody.feature};
            --display-font-family: ${this.$tokens.fonts.display.family}, var(--sans-serif-fallback-stack);
            --display-font-weight: ${this.$tokens.fonts.display.weight};
            --display-font-feature: ${this.$tokens.fonts.display.feature};
            --monospace-font-family: ${this.$tokens.fonts.mono.family}, monospace;
            --monospace-font-weight: ${this.$tokens.fonts.mono.weight};
            --monospace-font-feature: ${this.$tokens.fonts.mono.feature};
          }
          .dark-mode {
            --background-color: ${this.$tokens.colorMode.dark.backgroundColor};
            --on-background-color: ${this.$tokens.colorMode.dark.onBackgroundColor};
            --surface-color: ${this.$tokens.colorMode.dark.surfaceColor};
            --elevated-surface-color: ${this.$tokens.colorMode.dark.elevatedSurfaceColor};
          }
          `,
          type: 'text/css'
        }
      ]
    }
  }
}
</script>
