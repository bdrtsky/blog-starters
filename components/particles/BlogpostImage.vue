<template>
  <section>
    <img :src="blogpost.image" :alt="blogpost.title" />
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
