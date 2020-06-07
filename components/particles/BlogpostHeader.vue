<template>
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
          display: 'flex',
          flexWrap: 'wrap',
          fontFamily: 'var(--monospace-font-family)',
          ...$tokens.textStyle.eight,
          color: $tokens.colors.grey.base,
          [$tokens.mq.md]: {
            ...$tokens.textStyle.seven
          }
        })
      "
    >
      <NuxtLink
        v-for="tag in blogpost.tags"
        :key="tag"
        to="/"
        :class="
          $css({
            marginRight: '1rem',
            marginBottom: '0.5rem'
          })
        "
      >
        {{ tag }}
      </NuxtLink>
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
</template>

<script>
export default {
  props: {
    blogpost: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style></style>
