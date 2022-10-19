/**
  npm i -D eslint eslint-plugin-import eslint-plugin-vue eslint-config-airbnb-typescript
  eslint-plugin-vuejs-accessibility @vue/eslint-config-typescript @vue/eslint-config-airbnb
  @typescript-eslint/parser @typescript-eslint/eslint-plugin
  */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'brace-style': ['error', 'allman', {
      allowSingleLine: true,
    }],
    'linebreak-style': ['error', 'unix'],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 'off',
  },
};
