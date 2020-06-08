<template>
  <div>
    <div>
      <div
        v-css="{
          padding: '0 1rem',
          maxWidth: $tokens.containerMaxWidth,
          margin: '2.25rem auto'
        }"
      >
        <p
          v-css="{
            ...$tokens.textStyle.sm,
            width: '100%',
            maxWidth: $tokens.readableLineLength,
            [$tokens.mq.md]: {
              ...$tokens.textStyle.eight
            }
          }"
        >
          {{ homeData.intro }}
        </p>
      </div>

      <div
        v-css="{
          backgroundColor: 'var(--surface-color)'
        }"
      >
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
