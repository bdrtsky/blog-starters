<template>
  <div>
    <div>
      <div>
        <p
          class="
            font-display 
            text-purple-mode-surface-color 
            text-one 
            tracking-20 
            max-w-readable-line-length
          "
        >
          {{ homeData.intro }}
        </p>
      </div>

      <div>
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
