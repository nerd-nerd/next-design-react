module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-less',
    'stylelint-config-rational-order'
  ],
  customSyntax: require('postcss-less'),
  rules: {
    'string-quotes': 'single'
  }
}
