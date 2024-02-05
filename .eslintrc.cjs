module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: [
    'react-refresh',
    'unused-imports',
    'tailwindcss',
    '@emotion',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@emotion/pkg-renaming': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'tailwindcss/classnames-order': 'warn', // Tailwind CSS에서 클래스 이름의 순서가 지정되지 않은 경우 경고 보고
    'tailwindcss/enforces-negative-arbitrary-values': 'warn', // Tailwind CSS에서 음수 임의값 사용 시 경고 보고
    'tailwindcss/enforces-shorthand': 'warn', // Tailwind CSS에서 축약 특성을 사용하지 않은 경우 경고 보고
    'tailwindcss/no-arbitrary-value': 'off', // Tailwind CSS에서 임의값에 대한 규칙 비활성화
    'tailwindcss/no-custom-classname': 'off', // Tailwind CSS에서 사용자 지정 클래스 이름에 대한 규칙 비활성화
    'tailwindcss/no-contradicting-classname': 'error', // Tailwind CSS에서 모순되는 클래스 이름에 대해 오류 보고
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
  },
}
