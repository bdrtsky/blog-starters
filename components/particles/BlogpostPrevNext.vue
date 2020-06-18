<template>
  <section class="flex flex-col md:flex-row">
    <div
      class="prevnext md:w-1/2 p-2 md:mr-1 text-center md:text-right "
      :class="[
        prevNext[0]
          ? 'cursor-pointer hover:bg-light-mode-elevated-surface-color dark-hover:bg-dark-mode-elevated-surface-color'
          : 'pointer-events-none'
      ]"
      @click="
        $router.push({
          name: 'blogpost',
          params: { blogpost: prevNext[0].slug }
        })
      "
      @keydown.enter="
        $router.push({
          name: 'blogpost',
          params: { blogpost: prevNext[0].slug }
        })
      "
    >
      <NuxtLink
        v-if="prevNext[0]"
        :to="{
          name: 'blogpost',
          params: { blogpost: prevNext[0].slug }
        }"
        class="flex flex-col focus:outline-none"
      >
        <span class="text-grey-500">Previous</span>
        <span
          class="font-display-weight text-seven leading-seven md:text-six md:leading-six"
        >
          {{ prevNext[0].title }}
        </span>
      </NuxtLink>
    </div>
    <div
      class="prevnext md:w-1/2 p-2 md:ml-1 text-center md:text-left "
      :class="[
        prevNext[1]
          ? 'cursor-pointer hover:bg-light-mode-elevated-surface-color dark-hover:bg-dark-mode-elevated-surface-color'
          : 'pointer-events-none'
      ]"
      @click="
        $router.push({
          name: 'blogpost',
          params: { blogpost: prevNext[1].slug }
        })
      "
      @keydown.enter="
        $router.push({
          name: 'blogpost',
          params: { blogpost: prevNext[1].slug }
        })
      "
    >
      <NuxtLink
        v-if="prevNext[1]"
        :to="{
          name: 'blogpost',
          params: { blogpost: prevNext[1].slug }
        }"
        class="flex flex-col focus:outline-none"
      >
        <span class="text-grey-500">Next</span>
        <span
          class="font-display-weight text-seven leading-seven md:text-six md:leading-six"
        >
          {{ prevNext[1].title }}
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    prevNext: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="postcss" scoped>
.prevnext:focus-within,
.prevnext:focus {
  outline: none;
  outline-width: 1px;
  outline-style: solid;
  outline-color: theme('colors.grey.300');
}

.dark-mode {
  & .prevnext:focus-within,
  & .prevnext:focus {
    outline-color: theme('colors.grey.800');
  }
}
</style>
