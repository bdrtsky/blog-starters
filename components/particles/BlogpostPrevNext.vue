<template>
  <section
    :class="
      $css({
        color: $tokens.colors.grey['500'],
        display: 'flex',
        justifyContent: 'space-between',
        ...$tokens.textStyle.base,
        fontWeight: 'var(--display-font-weight)',
        [$tokens.mq.md]: {
          ...$tokens.textStyle.seven
        }
      })
    "
  >
    <div
      :class="
        $css({
          width: '50%'
        })
      "
    >
      <NuxtLink
        v-if="prevNext[0]"
        :to="{
          name: 'blogpost',
          params: { blogpost: prevNext[0].slug }
        }"
        :class="
          $css({
            display: 'flex',
            flexDirection: 'column',
            marginRight: '0.25rem',
            ':hover': {
              color: $tokens.colors.grey['700']
            }
          })
        "
      >
        <ArrowIcon
          :class="
            $css({
              width: '2rem',
              transform: 'rotate(180deg)',
              marginBottom: '0.25rem',
              [$tokens.mq.md]: {
                width: '3rem',
                marginBottom: '0.5rem'
              }
            })
          "
        />
        <span>{{ prevNext[0].title }}</span>
      </NuxtLink>
    </div>
    <div
      :class="
        $css({
          width: '50%'
        })
      "
    >
      <NuxtLink
        v-if="prevNext[1]"
        :to="{
          name: 'blogpost',
          params: { blogpost: prevNext[1].slug }
        }"
        :class="
          $css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginLeft: '0.25rem',
            textAlign: 'right',
            ':hover': {
              color: $tokens.colors.grey['700']
            }
          })
        "
      >
        <ArrowIcon
          :class="
            $css({
              width: '2rem',
              marginBottom: '0.25rem',
              [$tokens.mq.md]: {
                width: '3rem',
                marginBottom: '0.5rem'
              }
            })
          "
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
