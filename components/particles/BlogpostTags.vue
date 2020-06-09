<template>
  <div
    v-css="{
      marginBottom: '0.5rem',
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: $tokens.fonts.mono.family,
      ...$tokens.textStyle.eight,
      color: $tokens.colors.grey.base,
      [$tokens.mq.md]: {
        ...$tokens.textStyle.seven
      }
    }"
  >
    <NuxtLink
      v-for="tag in tags"
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
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
