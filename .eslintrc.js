module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'next', 'next/core-web-vitals'],
  rules: {
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'no-unused-vars': 'off',
  },
}
