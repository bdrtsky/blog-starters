<template>
  <header>
    <div class="container">
      <h1><NuxtLink to="/">Evan You</NuxtLink></h1>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  padding: 2rem 1rem;
}

h1 {
  font: var(--font-6);
  font-family: var(--monospace-font-family);
  letter-spacing: 0;
  font-weight: var(--display-font-weight);
  text-transform: uppercase;
}
</style>
