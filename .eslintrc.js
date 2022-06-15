module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "indent": ["error", 2],
    "no-multiple-template-roots": "off",
    "no-multiple-empty-lines": ["error", { "max": 6, "maxBOF": 0, "maxEOF": 0 }],
    "eol-last": ["off", "always"],
    "space-before-function-paren": ["off", "always"],
    "comma-dangle": ["off", "always"],
    "indent": ["off", 6],
    "no-trailing-spaces": ["off", { "skipBlankLines": true }],
    // "linebreak-style": ["error", "windows"],
    // "quotes": ["error", "single"],

  },

  'extends': [
    // 'plugin:vue/essential',
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ]
}
