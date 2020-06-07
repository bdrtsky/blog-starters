<template>
  <div>
    <div>
      <div
        :class="
          $css({
            padding: '0 1rem',
            maxWidth: $tokens.containerMaxWidth,
            margin: '2.25rem auto'
          })
        "
      >
        <p
          :class="
            $css({
              ...$tokens.textStyle.sm,
              width: '100%',
              maxWidth: 820,
              [$tokens.mq.md]: {
                ...$tokens.textStyle.eight
              }
            })
          "
        >
          {{ homeData.intro }}
        </p>
      </div>

      <div
        :class="
          $css({
            backgroundColor: 'var(--surface-color)'
          })
        "
      >
        <ul
          :class="
            $css({
              padding: '2rem 1rem',
              maxWidth: $tokens.containerMaxWidth,
              margin: '2.25rem auto',
              display: 'flex',
              flexDirection: 'column'
            })
          "
        >
          <li v-for="(blogpost, i) in blogposts" :key="blogpost.slug">
            <BlogpostPreview
              :blogpost="blogpost"
              :class="
                $css({
                  marginBottom: i + 1 < blogposts.length && '1.5rem'
                })
              "
            ></BlogpostPreview>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const blogposts = await app.$content('blog').fetch()
    const homeData = await app.$content('home').fetch()
    console.log(blogposts)

    return { blogposts, homeData }
  },
  data() {
    return {
      //
    }
  },
  mounted() {
    console.log(this.$tokens)
  }
}
</script>
