const theme = {
  color: {
    first: '#ff385c',
    second: '#00848a',
    third: '#222222'
  },
  mixin: {
    shadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }
    `
  }
}

export default theme
