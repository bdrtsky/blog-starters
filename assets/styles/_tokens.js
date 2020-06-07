import colors from './_colors'

const fonts = {
  body: {
    family: 'Space Grotesk',
    weight: '400',
    feature: 'normal'
  },
  boldBody: {
    family: 'Space Grotesk',
    weight: '600',
    feature: 'normal'
  },
  display: {
    family: 'Space Grotesk',
    weight: '600',
    feature: 'normal'
  },
  mono: {
    family: 'Space Mono',
    weight: '500',
    feature: 'normal'
  }
}

const textStyle = {
  base: {
    fontSize: '16px',
    lineHeight: '24px'
  },
  one: {
    fontSize: '68px',
    lineHeight: '72px'
  },
  two: {
    fontSize: '54px',
    lineHeight: '56px'
  },
  three: {
    fontSize: '42px',
    lineHeight: '48px'
  },
  four: {
    fontSize: '32px',
    lineHeight: '36px'
  },
  five: {
    fontSize: '28px',
    lineHeight: '32px'
  },
  six: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  seven: {
    fontSize: '20px',
    lineHeight: '28px'
  },
  eight: {
    fontSize: '18px',
    lineHeight: '24px'
  },
  sm: {
    fontSize: '14px',
    lineHeight: '20px'
  },
  xs: {
    fontSize: '12px',
    lineHeight: '16px'
  }
}

const colorMode = {
  purple: {
    backgroundColor: '#2C2C35',
    surfaceColor: '#33333D',
    elevatedSurfaceColor: '#3e3e52',
    errorColor: '#f44336',
    onBackgroundColor: '#ffffff',
    onSurfaceColor: '#ffffff',
    onErrorColor: '',
    successColor: '#4caf50'
  },
  dark: {
    backgroundColor: '#121212',
    surfaceColor: '#1E1E1E',
    elevatedSurfaceColor: '#303030',
    errorColor: '#f44336',
    onBackgroundColor: '#ffffff',
    onSurfaceColor: '#ffffff',
    onErrorColor: '',
    successColor: '#4caf50'
  },
  light: {
    backgroundColor: '#ffffff',
    surfaceColor: '#f5f5f5',
    elevatedSurfaceColor: '#EEEEEE',
    errorColor: '#f44336',
    onBackgroundColor: '#000000',
    onSurfaceColor: '#000000',
    onErrorColor: '',
    successColor: '#4caf50'
  },
  grey: {
    backgroundColor: '#f5f5f5',
    surfaceColor: '#ffffff',
    elevatedSurfaceColor: '#EEEEEE',
    errorColor: '#f44336',
    onBackgroundColor: '#000000',
    onSurfaceColor: '#000000',
    onErrorColor: '',
    successColor: '#4caf50'
  }
}

const letterSpacing = {
  '-20': 'calc(20 * -0.0125rem)',
  '-15': 'calc(15 * -0.0125rem)',
  '-10': 'calc(10 * -0.0125rem)',
  '-5': 'calc(5 * -0.0125rem)',
  '-4': 'calc(4 * -0.0125rem)',
  '-3': 'calc(3 * -0.0125rem)',
  '-2': 'calc(2 * -0.0125rem)',
  '-1': '-0.0125rem',
  '+1': '0.0125rem',
  '+2': 'calc(2 * 0.0125rem)',
  '+3': 'calc(3 * 0.0125rem)',
  '+4': 'calc(4 * 0.0125rem)',
  '+5': 'calc(5 * 0.0125rem)',
  '+10': 'calc(10 * 0.0125rem)',
  '+15': 'calc(15 * 0.0125rem)',
  '+20': 'calc(20 * 0.0125rem)'
}

const breakpoints = {
  sm: '640px',
  md: '834px',
  lg: '1024px',
  xl: '1280px'
}

const mq = () => {
  const mq = {}
  Object.keys(breakpoints).map(
    (bp) => (mq[bp] = `@media (min-width: ${breakpoints[bp]})`)
  )
  return mq
}

const other = {
  containerMaxWidth: '1264px',
  sanSerifFallbackStack: `-apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
}

// @font-face {
//   font-family: 'DM Mono';
//   src: url('~assets/fonts/DMMono/DMMono-Regular.woff2') format('woff2'),
//     url('~assets/fonts/DMMono/DMMono-Regular.woff') format('woff');
//   font-weight: 400;
//   font-style: normal;
//   font-display: swap;
// }

// const fontFaces = () => {
//   const fontFaces = []
//   return
// }

export default {
  fonts,
  letterSpacing,
  textStyle,
  colorMode,
  breakpoints,
  mq: mq(),
  colors,
  ...other
}
