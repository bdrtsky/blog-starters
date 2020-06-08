<template>
  <div>
    <div>
      <div class="say-hello-to-tailwind flex items-center ">
        <p class="text-six leading-six max-w-readable-line-length m-auto px-4">
          {{ homeData.intro }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const homeData = await app.$content('home').fetch()
    return { homeData }
  }
}
</script>

<style lang="postcss">
/* want a viewport height minus header and footer heights? */
/* good luck to use pure tailwind solution :D */

.say-hello-to-tailwind {
  height: calc(100vh - theme('spacing.24') - theme('spacing.32'));
}

@screen md {
  .say-hello-to-tailwind {
    height: calc(100vh - theme('spacing.32') - theme('spacing.32'));
  }
}
</style>
