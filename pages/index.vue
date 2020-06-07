<template>
  <div>
    <div>
      <div>
        <p>
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

<style lang="scss" scoped>
p {
  color: red;
  @include text-style-one;
  letter-spacing: $ls-20;
}
</style>
