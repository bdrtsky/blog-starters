<template>
  <ul>
    <li v-for="blogpost in blogposts" :key="blogpost.slug" class="px-4 mb-12">
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
