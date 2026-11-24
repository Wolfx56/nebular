import rxjs from 'eslint-plugin-rxjs-x';
import globals from 'globals';
import angular from 'angular-eslint';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['src/framework/**/*'],
  },
  ...[...angular.configs.tsRecommended, prettier].map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  {
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,

    plugins: {
      rxjs,
      '@typescript-eslint': tseslint.plugin,
    },

    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
    },

    rules: {
      quotes: 'off',
      'dot-notation': 'off',
      'no-restricted-globals': ['error', 'fit', 'fdescribe'],
      '@typescript-eslint/dot-notation': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/prefer-inject': 'off',
      // Angular 22 made OnPush the default; existing components were migrated to `ChangeDetectionStrategy.Eager`.
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',

      'rxjs/no-unsafe-takeuntil': [
        'error',
        {
          allow: [
            'count',
            'defaultIfEmpty',
            'endWith',
            'every',
            'finalize',
            'finally',
            'isEmpty',
            'last',
            'max',
            'min',
            'publish',
            'publishBehavior',
            'publishLast',
            'publishReplay',
            'reduce',
            'share',
            'shareReplay',
            'skipLast',
            'takeLast',
            'throwIfEmpty',
            'toArray',
          ],
        },
      ],
    },
  },
  ...[...angular.configs.templateRecommended, prettier].map((config) => ({
    ...config,
    files: ['**/*.html'],
  })),
  {
    files: ['**/*.html'],
    rules: {
      // New in angular-eslint 22 recommended. Migrating templates to @if/@for is tracked separately.
      '@angular-eslint/template/prefer-control-flow': 'off',
    },
  },
  {
    files: ['./*.js'],

    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: 11,
      sourceType: 'commonjs',
    },
  },
];
