<template>
  <section
    :class="
      $css({
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%',
        overflow: 'hidden',
        marginBottom: '1rem'
      })
    "
  >
    <img
      :src="blogpost.image"
      :alt="blogpost.title"
      :class="
        $css({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        })
      "
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
