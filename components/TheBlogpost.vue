<template>
  <article>
    <BlogpostHeader :blogpost="blogpost" />
    <div class="bg-light-mode-surface-color dark:bg-dark-mode-surface-color">
      <div class="max-w-container-max-width m-auto p-4 pb-8 md:pb-12">
        <div class="mr-auto max-w-readable-line-length">
          <BlogpostImage v-if="blogpost.image" :blogpost="blogpost" />
          <BlogpostContent :blogpost="blogpost" />
          <BlogpostPrevNext :prev-next="prevNext" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    blogpost: {
      type: Object,
      default: () => {}
    },
    prevNext: {
      type: Array,
      default: () => []
    }
  }
}
</script>
