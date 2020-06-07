const defaultTheme = require('tailwindcss/defaultTheme')
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      sm: '640px',
      md: '834px',
      lg: '1024px',
      xl: '1280px'
    },
    fontSize: {
      base: '16px',
      one: '68px',
      two: '54px',
      three: '42px',
      four: '32px',
      five: '28px',
      six: '24px',
      seven: '20px',
      eight: '18px',
      sm: '14px',
      xs: '12px'
    },
    letterSpacing: {
      '-20': 'calc(20 * -0.0125rem)',
      '-15': 'calc(15 * -0.0125rem)',
      '-10': 'calc(10 * -0.0125rem)',
      '-5': 'calc(5 * -0.0125rem)',
      '-4': 'calc(4 * -0.0125rem)',
      '-3': 'calc(3 * -0.0125rem)',
      '-2': 'calc(2 * -0.0125rem)',
      '-1': '-0.0125rem',
      '1': '0.0125rem',
      '2': 'calc(2 * 0.0125rem)',
      '3': 'calc(3 * 0.0125rem)',
      '4': 'calc(4 * 0.0125rem)',
      '5': 'calc(5 * 0.0125rem)',
      '10': 'calc(10 * 0.0125rem)',
      '15': 'calc(15 * 0.0125rem)',
      '20': 'calc(20 * 0.0125rem)'
    },
    lineHeight: {
      base: '24px',
      one: '72px',
      two: '56px',
      three: '48px',
      four: '36px',
      five: '32px',
      six: '32px',
      seven: '28px',
      eight: '24px',
      sm: '20px',
      xs: '16px'
    },
    extend: {
      fontFamily: {
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        body: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        monospace: ['Space Mono', ...defaultTheme.fontFamily.mono]
      },
      fontWeight: {
        body: 400,
        'bold-body': 600,
        display: 600,
        mono: 400
      },
      maxWidth: {
        'container-max-width': '1264px',
        'readable-line-length': '820px'
      },
      colors: {
        primary: '#64D88A',
        grey: {
          base: '#9e9e9e',
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121'
        },
        'purple-mode': {
          'background-color': '#2C2C35',
          'surface-color': '#33333D',
          'elevated-surface-color': '#3e3e52',
          'error-color': '#f44336',
          'on-background-color': '#ffffff',
          'on-surface-color': '#ffffff',
          'on-error-color': '',
          'success-color': '#4caf50'
        },
        'dark-mode': {
          'background-color': '#121212',
          'surface-color': '#1E1E1E',
          'elevated-surface-color': '#303030',
          'error-color': '#f44336',
          'on-background-color': '#ffffff',
          'on-surface-color': '#ffffff',
          'on-error-color': '',
          'success-color': '#4caf50'
        },
        'light-mode': {
          'background-color': '#ffffff',
          'surface-color': '#f5f5f5',
          'elevated-surface-color': '#EEEEEE',
          'error-color': '#f44336',
          'on-background-color': '#000000',
          'on-surface-color': '#000000',
          'on-error-color': '',
          'success-color': '#4caf50'
        },
        'grey-mode': {
          'background-color': '#f5f5f5',
          'surface-color': '#ffffff',
          'elevated-surface-color': '#EEEEEE',
          'error-color': '#f44336',
          'on-background-color': '#000000',
          'on-surface-color': '#000000',
          'on-error-color': '',
          'success-color': '#4caf50'
        }
      }
    }
  },
  variants: {
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'dark-focus',
      'dark-hover'
    ],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'dark-hover',
      'dark-focus'
    ]
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
