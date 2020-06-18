<template>
  <section class="relative w-full overflow-hidden mb-4">
    <img
      class="absolute top-0 left-0 w-full h-full object-cover"
      :src="blogpost.image"
      :alt="blogpost.title"
    />
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
section {
  padding-bottom: 56.25%;
}
</style>
