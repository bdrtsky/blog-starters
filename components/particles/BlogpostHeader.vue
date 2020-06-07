<template>
  <header>
    <div>
      <NuxtLink v-for="tag in blogpost.tags" :key="tag" to="/">
        {{ tag }}
      </NuxtLink>
    </div>
    <h1>
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
