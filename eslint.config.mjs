import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**'],
  },

  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('prettier'),

  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off', // No necesario en React 17+
      'react/prop-types': 'off',
      'no-console': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];

export default eslintConfig;
