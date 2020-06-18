<template>
  <article
    class="cursor-pointer hover:opacity-75 focus:opacity-50 focus-within:opacity-50 focus:outline-none"
    tabindex="-1"
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
    <time class="block font-monospace text-sm leading-sm text-grey-base mb-2">
      {{ formatDate(blogpost.createdAt) }}
    </time>
    <NuxtLink
      class="block focus:outline-none"
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
    >
      <h1
        class="text-five leading-five font-display-weight mb-2 md:text-four md:leading-four"
      >
        {{ blogpost.title }}
      </h1>
    </NuxtLink>
    <p class="mb-2 truncate-3">
      {{ blogpost.previewSnippet }}
    </p>

    <NuxtLink
      class="flex text-sm leading-sm font-bold-body-weight text-grey-500 focus:outline-none"
      tabindex="-1"
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
    >
      <span class="mr-2">
        Read More ¬
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
