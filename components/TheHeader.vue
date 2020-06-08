<template>
  <header
    v-css="{
      maxWidth: $tokens.containerMaxWidth,
      margin: 'auto',
      padding: '0 1rem',
      height: '3.5rem',
      [$tokens.mq.md]: {
        height: '5rem'
      }
    }"
  >
    <div
      v-css="{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }"
    >
      <h1
        v-css="{
          ...$tokens.textStyle.base,
          fontWeight: 'var(--bold-body-font-weight)',
          textTransform: 'uppercase',
          [$tokens.mq.md]: {
            ...$tokens.textStyle.six
          }
        }"
      >
        <NuxtLink to="/">Evan You</NuxtLink>
      </h1>
      <DarkModeSwitcher></DarkModeSwitcher>
    </div>
  </header>
</template>

<script>
export default {}
</script>
