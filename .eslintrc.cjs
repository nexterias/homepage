/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    es2022: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-unknown-property': 'off',
  },
  overrides: [
    {
      files: ['*.cjs'],
      env: {
        commonjs: true,
      },
    },
  ],
  ignorePatterns: [
    '.eslintrc.cjs',
    'tailwind.config.cjs',
    'postcss.config.cjs',
  ],
}
