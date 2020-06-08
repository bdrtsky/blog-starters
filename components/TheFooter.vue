<template>
  <footer
    v-css="{
      maxWidth: $tokens.containerMaxWidth,
      margin: 'auto',
      padding: '1.125rem',
      height: '5rem',
      ...$tokens.textStyle.sm,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [$tokens.mq.md]: {
        ...$tokens.textStyle.base,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }"
  >
    <div>
      <span
        v-css="{
          color: $tokens.colors.grey.base
        }"
      >
        © 2020
      </span>
      <span>Evan You</span>
    </div>
    <div>
      <ul
        v-css="{
          display: 'flex'
        }"
      >
        <li
          v-for="(link, i) in ['Email', 'Twitter', 'Github']"
          :key="link"
          v-css="{
            marginRight: '0.5rem',
            display: 'flex'
          }"
        >
          <a
            v-css="{
              marginRight: '0.5rem'
            }"
            href="#"
          >
            {{ link }}
          </a>
          <span
            v-if="i !== 2"
            v-css="{
              color: $tokens.colors.grey.base
            }"
          >
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
