<template>
  <article
    tabindex="0"
    class="cursor-pointer my-custom-outline"
    @click="
      $router.push({
        name: 'blogpost',
        params: { blogpost: blogpost.slug }
      })
    "
    @keydown.enter="
      $router.push({
        name: 'blogpost',
        params: { blogpost: blogpost.slug }
      })
    "
  >
    <time
      class="text-sm md:text-base block text-grey-500 mb-2 md:mb-4 font-monospace"
    >
      {{ formatDate(blogpost.createdAt) }}
    </time>
    <NuxtLink
      tabindex="-1"
      class="focus:outline-none block text-four leading-four md:text-three md:leading-three font-display-weight mb-4"
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
    >
      <h1>
        {{ blogpost.title }}
      </h1>
    </NuxtLink>
    <p class="text-eight leading-eight md:text-seven md:leading-seven mb-4">
      {{ blogpost.previewSnippet }}
    </p>

    <NuxtLink
      tabindex="-1"
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
    >
      <span class="text-grey-500">
        Read More...
      </span>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  props: {
    blogpost: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    formatDate(d) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="postcss" scoped>
/* how many stuff I need to configure to make this with Tailwind? */
article:focus-within,
article:focus {
  outline: none;
  color: theme('colors.grey.500');
  outline-offset: 0.5rem;
  outline-width: 1px;
  outline-style: solid;
}

@screen md {
  article:focus-within,
  article:focus {
    outline-offset: 1rem;
  }
}

/* how to do this in tailwind? */
article:hover p,
article:hover h1 {
  color: theme('colors.grey.500');
}
</style>
