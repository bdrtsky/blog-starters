<template>
  <header class="mb-8">
    <time
      class="text-sm md:text-base block text-grey-500 mb-2 md:mb-4 font-monospace"
    >
      {{ formatDate(blogpost.createdAt) }}
    </time>
    <h1
      class="text-four leading-four md:text-three md:leading-three font-display-weight"
    >
      {{ blogpost.title }}
    </h1>
  </header>
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

<style></style>
