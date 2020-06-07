<template>
  <article
    tabindex="-1"
    :class="
      $css({
        cursor: 'pointer',
        ':focus-within, :focus': {
          color: $tokens.colors.grey.base
        }
      })
    "
    @click="
      $router.push({
        name: 'blogpost',
        params: { blogpost: blogpost.slug }
      })
    "
    @keydown.enter="
      $router.push({
        name: 'blogpost',
        params: { blogpost: blogpost.slug }
      })
    "
  >
    <time
      :class="
        $css({
          display: 'block',
          fontFamily: 'var(--monospace-font-family)',
          ...$tokens.textStyle.sm,
          color: $tokens.colors.grey.base,
          marginBottom: '0.5rem'
        })
      "
    >
      {{ formatDate(blogpost.createdAt) }}
    </time>
    <NuxtLink
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
      :class="$css({ display: 'block' })"
    >
      <h1
        :class="
          $css({
            ...$tokens.textStyle.five,
            marginBottom: '0.5rem',
            [$tokens.mq.md]: {
              ...$tokens.textStyle.four
            }
          })
        "
      >
        {{ blogpost.title }}
      </h1>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  props: {
    blogpost: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    formatDate(d) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString('en', options)
    }
  }
}
</script>
