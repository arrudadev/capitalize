import simpleImportSort from 'eslint-plugin-simple-import-sort'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'

const eslintConfig = [
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
    ts: true
  }),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      camelcase: 'off',
      '@typescript-eslint/no-useless-constructor': 'off'
    },
  },
]

export default eslintConfig
