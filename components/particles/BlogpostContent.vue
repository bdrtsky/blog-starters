<template>
  <section>
    <nuxt-content :document="blogpost" />
  </section>
</template>

<script>
export default {
  props: {
    blogpost: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="postcss" scoped>
.nuxt-content {
  @apply mb-8 text-eight leading-eight;
  & h2 {
    @apply text-five leading-five mt-6 mb-4 font-display-weight;
  }
  & h3 {
    @apply text-six leading-six mt-5 mb-4 font-display-weight;
  }
  & img {
    @apply w-full;
  }
  & p {
    @apply mb-4 w-full;
    & code {
      @apply bg-light-mode-elevated-surface-color rounded-sm px-1;
    }
  }
  & a {
    @apply text-primary;
  }
  & ul {
    @apply list-disc mb-4;
    & li {
      @apply mb-2;
    }
  }
  & pre {
    @apply mb-4;
  }
  & code[class*='language-'],
  & pre[class*='language-'] {
    @apply rounded-sm font-monospace text-base leading-base;
  }
}

@screen md {
  .nuxt-content {
    @apply mb-8 text-seven leading-seven;
    & h2 {
      @apply text-four leading-four mt-8;
    }
    & h3 {
      @apply text-five leading-five mt-6;
    }
  }
}

/* this is what we have if no CSS variables is used */
.dark-mode {
  & .nuxt-content {
    & p {
      & code {
        @apply bg-dark-mode-elevated-surface-color;
      }
    }
  }
}
</style>
