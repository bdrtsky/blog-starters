<template>
  <footer>
    <div>
      <span>© 2020</span>
      <span>Evan You</span>
    </div>
    <div>
      <ul>
        <li v-for="(link, i) in ['Email', 'Twitter', 'Github']" :key="link">
          <a href="#">{{ link }}</a>
          <span v-if="i !== 2">/</span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
