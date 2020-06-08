<template>
  <article class="max-w-readable-line-length m-auto px-4 mt-4 md:mt-8">
    <BlogpostHeader :blogpost="blogpost" />
    <div>
      <div>
        <div>
          <BlogpostImage
            v-if="blogpost.image"
            :blogpost="blogpost"
            class="mb-4"
          />
          <BlogpostContent :blogpost="blogpost" />
          <BlogpostTags :tags="blogpost.tags" class="mb-4" />
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
