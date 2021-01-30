module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    extends: [
      '@nuxtjs/eslint-config-typescript',
      'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
      semi: [2, 'always'],
      camelcase: ['error', { allow: ['^[a-z]+(_[a-z]+)+$'] }], // Allow snakecase
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,
          multiline: {
            max: 1,
            allowFirstLine: false
          }
        }
      ]
    }
  };