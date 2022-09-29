module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
  ],
  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    semi: 'off',
    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/label-has-for': 'off',
  },
}
