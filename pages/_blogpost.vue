<template>
  <div>
    <TheBlogpost :blogpost="blogpost" :prev-next="prevNext" />
  </div>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    // const slug = route.params.blogpost
    const blogpost = await app.$content('blog', route.params.blogpost).fetch()
    const prevNext = await app
      .$content('blog')
      .only(['title', 'slug'])
      .surround(route.params.blogpost)
      .fetch()
    // console.log(prevNext)

    return { blogpost, prevNext }
  }
}
</script>
