<template>
  <section :class="nuxtContentStyles">
    <nuxt-content :document="blogpost" />
  </section>
</template>

<script>
export default {
  props: {
    blogpost: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    nuxtContentStyles() {
      return this.$css({
        ...this.$tokens.textStyle.eight,
        marginBottom: '2rem',
        // maxWidth: this.$tokens.containerMaxWidth,
        [this.$tokens.mq.md]: {
          ...this.$tokens.textStyle.seven
        },
        h2: {
          ...this.$tokens.textStyle.five,
          marginTop: '1.5rem',
          marginBottom: '1rem',
          [this.$tokens.mq.md]: {
            ...this.$tokens.textStyle.four,
            marginTop: '2rem'
          }
        },
        h3: {
          ...this.$tokens.textStyle.six,
          marginTop: '1.25rem',
          marginBottom: '1rem',
          [this.$tokens.mq.md]: {
            ...this.$tokens.textStyle.five,
            marginTop: '1.5rem'
          }
        },
        img: {
          width: '100%'
        },
        p: {
          marginBottom: '1rem',
          width: '100%',
          code: {
            backgroundColor: 'var(--elevated-surface-color)',
            padding: '0 0.25rem',
            borderRadius: 4
          }
        },
        a: {
          color: 'var(--primary-color)'
        },
        ul: {
          listStyle: 'inside',
          marginBottom: '1rem',
          li: {
            marginBottom: '0.5rem'
          }
        },
        pre: {
          marginBottom: '1rem'
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

<style></style>
