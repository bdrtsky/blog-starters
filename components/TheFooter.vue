<template>
  <footer
    class="max-w-container-max-width m-auto p-4 h-20 text-sm leading-sm flex flex-col justify-center md:text-base md:leading-base md:flex-row md:justify-between md:items-center"
  >
    <div>
      <span class="text-grey-base">
        © 2020
      </span>
      <span>Evan You</span>
    </div>
    <div>
      <ul class="flex">
        <li
          v-for="(link, i) in ['Email', 'Twitter', 'Github']"
          :key="link"
          class="mr-2 flex"
        >
          <a class="mr-2" href="#">
            {{ link }}
          </a>
          <span v-if="i !== 2" class="text-grey-base">
            /
          </span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
