<template>
  <article
    tabindex="-1"
    :class="
      $css({
        cursor: 'pointer',
        ':hover': {
          opacity: 0.75
        },
        ':focus-within, :focus': {
          opacity: 0.5
        }
      })
    "
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
      :class="
        $css({
          display: 'block',
          fontFamily: 'var(--monospace-font-family)',
          ...$tokens.textStyle.sm,
          color: $tokens.colors.grey.base,
          marginBottom: '0.5rem'
        })
      "
    >
      {{ formatDate(blogpost.createdAt) }}
    </time>
    <NuxtLink
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
      :class="$css({ display: 'block' })"
    >
      <h1
        :class="
          $css({
            ...$tokens.textStyle.five,
            marginBottom: '0.5rem',
            [$tokens.mq.md]: {
              ...$tokens.textStyle.four
            }
          })
        "
      >
        {{ blogpost.title }}
      </h1>
    </NuxtLink>
    <p
      :class="
        $css({
          ...truncateMultiline(3),
          marginBottom: '0.25rem'
        })
      "
    >
      {{ blogpost.previewSnippet }}
    </p>

    <NuxtLink
      tabindex="-1"
      :to="{ name: 'blogpost', params: { blogpost: blogpost.slug } }"
      :class="
        $css({
          display: 'flex',
          ...$tokens.textStyle.sm,
          fontWeight: 'var(--bold-body-font-weight)',
          color: $tokens.colors.grey['500']
        })
      "
    >
      <span
        :class="
          $css({
            marginRight: '0.5rem'
          })
        "
      >
        Read More
      </span>
      <ArrowIcon :class="$css({ width: '18px' })" />
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
