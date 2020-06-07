<template>
  <article>
    <BlogpostHeader :blogpost="blogpost" />
    <div>
      <div>
        <div>
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
