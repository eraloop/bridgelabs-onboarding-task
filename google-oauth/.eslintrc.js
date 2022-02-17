module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: 'babel-eslint'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-loss-of-precision': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-nonoctal-decimal-escape': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
  