<template>
  <div class="page-wrapper">
    <div class="container">
      <nuxt-content :document="data" class="nuxt-content" />
    </div>
    <!-- <template v-for="el in data.body.children">
      <component :is="el.tag">
        <template v-for="text in el.children.filter((e) => e.type === 'text')">
          {{ text.value }}
        </template>
      </component>
    </template> -->
  </div>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    // const slug = route.params.blogpost
    const data = await app.$content('blog', route.params.blogpost).fetch()
    // console.log(slug)

    return { data }
  }
}
</script>

<style scoped>
.page-wrapper {
  padding: 0 1rem;
}

.nuxt-content img {
  height: 4rem;
}

/* .nuxt-content code[class*='language-'],
.nuxt-content pre[class*='language-'] {
  font: var(--font-base);
} */
</style>
