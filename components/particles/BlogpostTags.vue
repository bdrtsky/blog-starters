<template>
  <div class="flex flex-wrap">
    <NuxtLink
      v-for="tag in tags"
      :key="tag"
      to="/"
      class="text-grey-500 mr-4 mb-2"
    >
      #{{ tag }}
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
