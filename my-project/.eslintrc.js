/*
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-21 10:08:56
 * @LastEditTime: 2022-04-22 14:21:14
 */
module.exports = {
  globals: {
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    defineProps: 'readonly',
    withDefaults: 'readonly',

  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
  },
};
