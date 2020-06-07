<template>
  <ul
    :class="
      $css({
        padding: '2rem 1rem',
        maxWidth: $tokens.containerMaxWidth,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column'
      })
    "
  >
    <li
      v-for="(blogpost, i) in blogposts"
      :key="blogpost.slug"
      :class="
        $css({
          maxWidth: $tokens.readableLineLength,
          marginBottom: i + 1 < blogposts.length && '2rem'
        })
      "
    >
      <BlogpostPreview :blogpost="blogpost"></BlogpostPreview>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    blogposts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
