module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'react-hooks',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'multiline-ternary': 'off',
    'comma-dangle': 'off',
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'never',
        groups: [
          '/^react/',
          'module',
          '/^src/routes/',
          '/^src/context/',
          '/^src/layouts/',
          '/^src/pages/',
          '/^src/theme/',
          '/^src/components/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
