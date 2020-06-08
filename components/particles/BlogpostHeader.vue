<template>
  <header
    v-css="{
      maxWidth: $tokens.containerMaxWidth,
      margin: 'auto',
      padding: '0 1rem',
      marginBottom: '1rem',
      marginTop: '1rem',
      [$tokens.mq.md]: {
        marginBottom: '2rem'
      }
    }"
  >
    <div
      v-css="{
        marginBottom: '0.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        fontFamily: 'var(--monospace-font-family)',
        ...$tokens.textStyle.eight,
        color: $tokens.colors.grey.base,
        [$tokens.mq.md]: {
          ...$tokens.textStyle.seven
        }
      }"
    >
      <NuxtLink
        v-for="tag in blogpost.tags"
        :key="tag"
        v-css="{
          marginRight: '1rem',
          marginBottom: '0.5rem'
        }"
        to="/"
      >
        {{ tag }}
      </NuxtLink>
    </div>
    <h1
      v-css="{
        ...$tokens.textStyle.four,
        [$tokens.mq.md]: {
          ...$tokens.textStyle.two
        }
      }"
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
