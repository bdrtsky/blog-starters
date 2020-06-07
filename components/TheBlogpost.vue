<template>
  <article>
    <BlogpostHeader :blogpost="blogpost" />
    <div
      :class="
        $css({
          backgroundColor: 'var(--surface-color)'
        })
      "
    >
      <div
        :class="
          $css({
            maxWidth: $tokens.containerMaxWidth,
            margin: 'auto',
            padding: '1rem',
            paddingBottom: '2rem',
            [$tokens.mq.md]: {
              paddingBottom: '3rem'
            }
          })
        "
      >
        <div
          :class="
            $css({
              marginRight: 'auto',
              maxWidth: $tokens.readableLineLength
            })
          "
        >
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
