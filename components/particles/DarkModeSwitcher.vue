<template>
  <div>
    <button
      @click="
        $colorMode.value === 'dark'
          ? ($colorMode.preference = 'light')
          : ($colorMode.preference = 'dark')
      "
    >
      <SunIcon v-if="$colorMode.value === 'light'" />
      <MoonIcon v-else />
    </button>
  </div>
</template>

<script>
import MoonIcon from '@/assets/icons/moon.svg?inline'
import SunIcon from '@/assets/icons/sun.svg?inline'

export default {
  components: {
    MoonIcon,
    SunIcon
  }
}
</script>

<style></style>
