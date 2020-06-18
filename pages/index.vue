<template>
  <div>
    <div>
      <div class="px-4 max-w-container-max-width my-10 mx-auto">
        <p
          class="text-sm leading-sm w-full max-w-readable-line-length md:text-eight md:leading-eight"
        >
          {{ homeData.intro }}
        </p>
      </div>

      <div class="bg-light-mode-surface-color dark:bg-dark-mode-surface-color">
        <BlogpostPreviewList :blogposts="blogposts" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const blogposts = await app.$content('blog').fetch()
    const homeData = await app.$content('home').fetch()
    // console.log(blogposts)

    return { blogposts, homeData }
  }
}
</script>
