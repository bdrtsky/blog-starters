<template>
  <header
    v-css="{
      maxWidth: $tokens.containerMaxWidth,
      margin: 'auto',
      padding: '0 1rem',
      marginBottom: '1rem',
      marginTop: '1rem',
      [$tokens.mq.md]: {
        marginBottom: '2rem'
      }
    }"
  >
    <BlogpostTags :tags="blogpost.tags" />
    <h1
      v-css="{
        ...$tokens.textStyle.four,
        [$tokens.mq.md]: {
          ...$tokens.textStyle.two
        }
      }"
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
  }
}
</script>

<style></style>
