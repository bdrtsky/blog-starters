<template>
  <article
    tabindex="-1"
    @click="
      $router.push({
        name: 'blogpost',
        params: { blogpost: blogpost.slug }
      })
    "
    @keydown.enter="
      $router.push({
        name: 'blogpost',
        params: { blogpost: blogpost.slug }
      })
    "
  >
    <time>
      {{ formatDate(blogpost.createdAt) }}
    </time>
    <NuxtLink :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }">
      <h1>
        {{ blogpost.title }}
      </h1>
    </NuxtLink>
    <p>
      {{ blogpost.previewSnippet }}
    </p>

    <NuxtLink
      tabindex="-1"
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
    >
      <span>
        Read More
      </span>
      <ArrowIcon />
    </NuxtLink>
  </article>
</template>

<script>
import ArrowIcon from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    ArrowIcon
  },
  props: {
    blogpost: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    formatDate(d) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString('en', options)
    }
  }
}
</script>
