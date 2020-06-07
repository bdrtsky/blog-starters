<template>
  <footer
    :class="
      $css({
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
      })
    "
  >
    <div>
      <span
        :class="
          $css({
            color: $tokens.colors.grey.base
          })
        "
        >© 2020</span
      >
      <span>Evan You</span>
    </div>
    <div>
      <ul
        :class="
          $css({
            display: 'flex'
          })
        "
      >
        <li
          v-for="(link, i) in ['Email', 'Twitter', 'Github']"
          :key="link"
          :class="
            $css({
              marginRight: '0.5rem',
              display: 'flex'
            })
          "
        >
          <a
            href="#"
            :class="
              $css({
                marginRight: '0.5rem'
              })
            "
            >{{ link }}</a
          >
          <span
            v-if="i !== 2"
            :class="
              $css({
                color: $tokens.colors.grey.base
              })
            "
            >/</span
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
