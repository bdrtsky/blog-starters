<template>
  <div
    class="mb-2 flex flex-wrap font-monospace text-eight leading-eight text-grey-base md:text-seven md:leading-seven"
  >
    <NuxtLink v-for="tag in tags" :key="tag" class="mr-4 mb-2" to="/">
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
