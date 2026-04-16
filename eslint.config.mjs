import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
  {
    ignores: [
      'node_modules/**',
      'build/**',
      '*.config.ts',
    ]
  },
  {
    files: ['src/**/*.{ts,tsx}', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...reactPlugin.configs.flat.recommended.languageOptions.globals,
        React: 'readonly'
      },
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-danger': 'warn',
      'react/no-direct-mutation-state': 'error',
      'react/no-deprecated': 'warn',
      'react/no-unknown-property': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-duplicate-imports': 'warn',
      'no-unreachable': 'error',
      'eqeqeq': 'error',
      'no-eval': 'error',
      'no-shadow': 'warn',
      'no-promise-executor-return': 'error',
      'require-await': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
      'object-shorthand': 'warn',
      'no-useless-return': 'warn',
      'no-implicit-coercion': 'warn',
      'prefer-template': 'warn',
      'no-unsafe-optional-chaining': 'error',
      'no-useless-catch': 'warn',
      'default-param-last': 'warn',
      'no-return-await': 'warn',
      'no-undef': 'off'
    }
  }
]
