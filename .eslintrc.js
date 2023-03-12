module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: ['@vue/airbnb', '@vue/typescript', 'plugin:vue/recommended', 'prettier'],
  plugins: ['file-progress'],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    // to enable progress
    'file-progress/activate': 1,

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'no-console': 'warn',
    'no-debugger': 'error',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-plusplus': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',

    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  overrides: [
    {
      files: ['*.story.*'],
      env: { node: true },
      rules: {
        'no-alert': 'off',
        'no-console': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.spec.ts'],
      env: { node: true },
      rules: {
        'no-alert': 'off',
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
