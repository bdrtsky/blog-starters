<template>
  <ul class="py-8 px-4 max-w-container-max-width m-auto flex flex-col">
    <li
      v-for="(blogpost, i) in blogposts"
      :key="blogpost.slug"
      class="max-w-readable-line-length"
      :class="[i + 1 < blogposts.length && 'mb-8']"
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
