<template>
  <div>
    <div class="max-w-readable-line-length m-auto mt-4 md:mt-8">
      <BlogpostPreviewList :blogposts="blogposts" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const blogposts = await app.$content('blog').fetch()

    return { blogposts }
  }
}
</script>

<style></style>
