<template>
  <header
    class="font-display-weight m-auto max-w-container-max-width px-4 my-4 md:mb-8"
  >
    <BlogpostTags :tags="blogpost.tags" />
    <h1 class="text-four leading-four md:text-two md:leading-two">
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
