<template>
  <section
    v-css="{
      color: $tokens.colors.grey['500'],
      display: 'flex',
      justifyContent: 'space-between',
      ...$tokens.textStyle.base,
      fontWeight: $tokens.fonts.display.weight,
      [$tokens.mq.md]: {
        ...$tokens.textStyle.seven
      }
    }"
  >
    <div
      v-css="{
        width: '50%'
      }"
    >
      <NuxtLink
        v-if="prevNext[0]"
        v-css="{
          display: 'flex',
          flexDirection: 'column',
          marginRight: '0.25rem',
          ':hover': {
            color: $tokens.colors.grey['700']
          }
        }"
        :to="{
          name: 'blogpost',
          params: { blogpost: prevNext[0].slug }
        }"
      >
        <ArrowIcon
          v-css="{
            width: '2rem',
            transform: 'rotate(180deg)',
            marginBottom: '0.25rem',
            [$tokens.mq.md]: {
              width: '3rem',
              marginBottom: '0.5rem'
            }
          }"
        />
        <span>{{ prevNext[0].title }}</span>
      </NuxtLink>
    </div>
    <div
      v-css="{
        width: '50%'
      }"
    >
      <NuxtLink
        v-if="prevNext[1]"
        v-css="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginLeft: '0.25rem',
          textAlign: 'right',
          ':hover': {
            color: $tokens.colors.grey['700']
          }
        }"
        :to="{
          name: 'blogpost',
          params: { blogpost: prevNext[1].slug }
        }"
      >
        <ArrowIcon
          v-css="{
            width: '2rem',
            marginBottom: '0.25rem',
            [$tokens.mq.md]: {
              width: '3rem',
              marginBottom: '0.5rem'
            }
          }"
        />
        <span>{{ prevNext[1].title }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import ArrowIcon from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    ArrowIcon
  },
  props: {
    prevNext: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
