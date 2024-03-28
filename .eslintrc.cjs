module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'error',
      { allowConstantExport: true },
      { noEmptyFunction: false},
      { noUnusedVars: false },
      { noUndef: false },
      { noVar: false },
      { noDuplicatedKeys: false },
      { noDuplicateCase: false },
      { noExpicitAny: false },
    ],
    "@typescript-eslint/no-unused-vars": "off",
  },
}
