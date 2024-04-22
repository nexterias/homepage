const config = require('@nexterias/prettier-config')

module.exports = {
  ...config,
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
}
