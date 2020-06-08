<template>
  <section class="my-weird-intrinsic-ratios-spacing relative overflow-hidden">
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
.my-weird-intrinsic-ratios-spacing {
  padding-bottom: 56.25%;
}
</style>
