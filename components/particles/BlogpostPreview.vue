<template>
  <article
    v-css="{
      cursor: 'pointer',
      ':hover': {
        opacity: 0.75
      },
      ':focus-within, :focus': {
        opacity: 0.5
      }
    }"
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
    <time
      v-css="{
        display: 'block',
        fontFamily: $tokens.fonts.mono.family,
        ...$tokens.textStyle.sm,
        color: $tokens.colors.grey.base,
        marginBottom: '0.5rem'
      }"
    >
      {{ formatDate(blogpost.createdAt) }}
    </time>
    <NuxtLink
      v-css="{ display: 'block' }"
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
    >
      <h1
        v-css="{
          ...$tokens.textStyle.five,
          marginBottom: '0.5rem',
          [$tokens.mq.md]: {
            ...$tokens.textStyle.four
          }
        }"
      >
        {{ blogpost.title }}
      </h1>
    </NuxtLink>
    <p
      v-css="{
        ...truncateMultiline(3),
        marginBottom: '0.5rem'
      }"
    >
      {{ blogpost.previewSnippet }}
    </p>

    <NuxtLink
      v-css="{
        display: 'flex',
        ...$tokens.textStyle.sm,
        fontWeight: $tokens.fonts.boldBody.weight,
        color: $tokens.colors.grey['500']
      }"
      tabindex="-1"
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
    >
      <span
        v-css="{
          marginRight: '0.5rem'
        }"
      >
        Read More
      </span>
      <ArrowIcon v-css="{ width: '18px' }" />
    </NuxtLink>
  </article>
</template>

<script>
import { truncateMultiline } from '@/assets/styles/_helpers'
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
    },
    truncateMultiline
  }
}
</script>
