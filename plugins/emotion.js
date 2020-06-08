import Vue from 'vue'
import { css } from 'emotion'
import tokens from '@/assets/styles/_tokens'

// injectGlobal({
//   '.nuxt-content': {
//     p: {
//       color: 'orange',
//       [tokens.mq.sm]: {
//         color: 'gray'
//       },
//       [tokens.mq.md]: {
//         color: 'hotpink',
//         width: '50%'
//       }
//     }
//   }
// })

Vue.prototype.$css = css
Vue.prototype.$tokens = tokens

Vue.directive('css', function(el, binding) {
  el.classList.add(css(binding.value))
})

// export default ({ app }, inject) => {
//   app.$css = css
// }

// import { css } from 'emotion'

// export default (_, inject) => {
//   console.log('damn', css)

//   inject('css', css)
// }
