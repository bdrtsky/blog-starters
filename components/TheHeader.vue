<template>
  <header class="h-24 md:h-32">
    <div
      class="px-4 md:px-8 w-full h-full flex items-center justify-between max-w-container-max-width m-auto"
    >
      <div class="hidden md:block w-1/4"></div>
      <h1
        class="text-six md:text-four w-auto md:w-1/2 text-center font-bold-body-weight"
      >
        <NuxtLink to="/">Evan You</NuxtLink>
      </h1>
      <nav class="w-auto  md:w-1/4 flex justify-end">
        <ul class="flex text-eight md:text-seven leading-seven">
          <li class="ml-4">
            <NuxtLink to="/">Me</NuxtLink>
          </li>
          <li class="ml-4">
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>
