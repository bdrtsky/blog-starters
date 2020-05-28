<template>
  <article
    @click="
      $router.push({
        name: 'blogpost',
        params: { blogpost: blogpost.slug }
      })
    "
  >
    <NuxtLink :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }">
      <h1>{{ blogpost.title }}</h1>
    </NuxtLink>
    <time>{{ formatDate(blogpost.createdAt) }}</time>
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

<style scoped>
h1 {
  font: var(--font-2);
  letter-spacing: var(--ls-15);
  font-weight: var(--display-font-weight);
}

time {
  font-family: var(--monospace-font-family);
}
</style>
