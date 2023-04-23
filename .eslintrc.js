module.exports = {
  overrides: [
    {
      env: {
        'jest/globals': true
      },
      extends: ['plugin:jest/all'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      overrides: [
        {
          files: ['*.js?(x)'],
          rules: {
            // requires types information, provided by `@typescript-eslint`. It
            // should fail silently if not available , but it doesn't, so we
            // explicitly disable it to be on the safe sides.
            'jest/unbound-method': 'off'
          }
        },
        {
          files: ['*.ts?(x)'],
          rules: {
            // Disabled for `jest/unbound-method`
            '@typescript-eslint/unbound-method': 'off'
          }
        }
      ],
      plugins: ['jest'],
      rules: {
        'jest/consistent-test-it': [
          'error', {withinDescribe: 'test'}  // NOTE: Opinionated
        ],
        'jest/max-expects': 'off',  // NOTE: Opinionated
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': ['error', {allow: ['afterEach', 'beforeEach']}],
        'jest/no-large-snapshots': [
          'error', {inlineMaxSize: 50, maxSize: Infinity}  // NOTE: Opinionated
        ],
        'jest/prefer-lowercase-title': [
          'error', {ignore: ['describe', 'test']}  // NOTE: Opinionated
        ],
        'jest/prefer-snapshot-hint': 'off',  // NOTE: Opinionated
        'jest/require-top-level-describe': 'off'  // NOTE: Opinionated
      }
    }
  ]
};
