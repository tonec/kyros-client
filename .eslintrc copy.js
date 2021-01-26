const path = require('path')

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'no-shadow': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  plugins: ['react', 'prettier', 'react-hooks', 'babel', 'async'],
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      },
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    browser: true,
    __CLIENT__: true,
    __SERVER__: true,
    __DEVELOPMENT__: true,
  },
}
