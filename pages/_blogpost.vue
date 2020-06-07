<template>
  <div>
    <article>
      <header
        :class="
          $css({
            maxWidth: $tokens.containerMaxWidth,
            margin: 'auto',
            padding: '0 1rem',
            marginBottom: '1rem',
            marginTop: '1rem',
            [$tokens.mq.md]: {
              marginBottom: '2rem'
            }
          })
        "
      >
        <div
          :class="
            $css({
              marginBottom: '0.5rem',
              dispaly: 'flex',
              flexWrap: 'wrap',
              ...$tokens.textStyle.eight,
              fontWeight: 'var(--bold-body-font-weight)',
              color: $tokens.colors.grey.base,
              [$tokens.mq.md]: {
                ...$tokens.textStyle.seven
              }
            })
          "
        >
          <nuxt-link
            v-for="tag in blogpost.tags"
            :key="tag"
            to="/"
            :class="
              $css({
                marginRight: '0.5rem'
              })
            "
          >
            {{ tag }}
          </nuxt-link>
        </div>
        <h1
          :class="
            $css({
              ...$tokens.textStyle.four,
              [$tokens.mq.md]: {
                ...$tokens.textStyle.two
              }
            })
          "
        >
          {{ blogpost.title }}
        </h1>
      </header>

      <div
        :class="
          $css({
            backgroundColor: 'var(--surface-color)'
          })
        "
      >
        <div
          :class="
            $css({
              maxWidth: $tokens.containerMaxWidth,
              margin: 'auto',
              padding: '1rem'
            })
          "
        >
          <div
            :class="
              $css({
                marginRight: 'auto',
                maxWidth: 820
              })
            "
          >
            <div
              :class="
                $css({
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  overflow: 'hidden',
                  marginBottom: '1rem'
                })
              "
            >
              <img
                :src="blogpost.image"
                :alt="blogpost.title"
                :class="
                  $css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  })
                "
              />
            </div>
            <div :class="nuxtContentStyles">
              <nuxt-content :document="blogpost" />
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    // const slug = route.params.blogpost
    const blogpost = await app.$content('blog', route.params.blogpost).fetch()
    console.log(blogpost)

    return { blogpost }
  },
  computed: {
    nuxtContentStyles() {
      return this.$css({
        ...this.$tokens.textStyle.eight,
        // maxWidth: this.$tokens.containerMaxWidth,
        [this.$tokens.mq.md]: {
          ...this.$tokens.textStyle.seven
        },
        img: {
          // width: '100%',
          height: '4rem'
        },
        p: {
          marginBottom: '1rem',
          width: '100%'
        },
        [`code[class*='language-'], pre[class*='language-']`]: {
          borderRadius: 4,
          ...this.$tokens.textStyle.base
        }
      })
    }
  }
}
</script>
