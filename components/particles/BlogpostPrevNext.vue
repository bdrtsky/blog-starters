<template>
  <section>
    <div>
      <NuxtLink
        v-if="prevNext[0]"
        :to="{
          name: 'blogpost',
          params: { blogpost: prevNext[0].slug }
        }"
      >
        <ArrowIcon />
        <span>{{ prevNext[0].title }}</span>
      </NuxtLink>
    </div>
    <div>
      <NuxtLink
        v-if="prevNext[1]"
        :to="{
          name: 'blogpost',
          params: { blogpost: prevNext[1].slug }
        }"
      >
        <ArrowIcon />
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
