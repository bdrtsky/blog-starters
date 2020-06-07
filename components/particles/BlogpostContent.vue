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

<style></style>
