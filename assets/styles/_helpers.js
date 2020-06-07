export const truncateMultiline = (lines) => {
  return {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical'
  }
}
