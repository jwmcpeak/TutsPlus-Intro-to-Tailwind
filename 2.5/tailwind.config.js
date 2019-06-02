module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    borderColor: ['invalid', 'responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['invalid', 'responsive', 'hover', 'focus', 'active']

  },
  plugins: [
    require('./tailwind/invalid-plugin.js')

  ]
}
