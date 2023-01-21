const ecmaVersion = 2022  // Node.js 16
const tabWidth = 2


module.exports = {
  env: {
    [`es${ecmaVersion}`]: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@mafalda/recommended',
    'plugin:import/recommended',
    'plugin:json/recommended',
    'plugin:n/recommended'
  ],
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
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': ['error', {allow: ['afterEach', 'beforeEach']}],
        'jest/prefer-lowercase-title': [
          'error', {ignore: ['describe', 'test']}  // NOTE: Opinionated
        ],
        'jest/require-top-level-describe': 'off'  // NOTE: Opinionated
      }
    },
    {
      extends: [
        'plugin:@mafalda/typescript',
        // Use the recommended rules from the `@typescript-eslint/eslint-plugin`
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript'
      ],
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
      parserOptions: {
        project: './tsconfig*.json'
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': ['error', {
          minimumDescriptionLength: 8,
          'ts-ignore': 'allow-with-description'
        }],
        '@typescript-eslint/no-shadow': 'error',
        // Disabled for `unused-imports/no-unused-imports`
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/object-curly-spacing': 'error',
        // '@typescript-eslint/no-unsafe-argument': 'warn',
        // '@typescript-eslint/no-unsafe-assignment': 'warn',
        // '@typescript-eslint/no-unsafe-call': 'warn',
        // '@typescript-eslint/no-unsafe-member-access': 'warn',
        // '@typescript-eslint/no-unsafe-return': 'warn',
        'no-shadow': 'off',  // Disabled for `@typescript-eslint/no-shadow`
        // Disabled for `@typescript-eslint/object-curly-spacing`
        'object-curly-spacing': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion,
    sourceType: 'module'  // Allows for the use of imports
  },
  plugins: [
    'require-duplicate',
    'sort-destructure-keys',
    'sort-keys',
    'unused-imports'
  ],
  rules: {
    '@mafalda/brace-style': [
      'error', 'allman-multiline', {allowSingleLine: true}
    ],
    'array-bracket-spacing': 'error',
    'arrow-body-style': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'error',
    'comma-dangle': 'error',
    'consistent-return': ['error', {treatUndefinedAsUnspecified: true}],
    curly: ['error', 'multi'],
    'function-paren-newline': ['error', 'consistent'],
    'import/extensions': [
      // ESM spec requires extensions for all `import` statements, but
      // Typescript forbids them for Typescript files, see ts(2691) error.
      'error', 'ignorePackages', {ts: 'never', tsx: 'never'}
    ],
    'import/no-named-as-default': 'warn',
    // Disabled since it doesn't have support for `exports` field and already
    // overlaps with `n/no-missing-import` rule
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {order: 'asc'},
        'newlines-between': 'always',
        warnOnUnassignedImports: true
      }
    ],
    'import/prefer-default-export': 'warn',
    indent: ['error', tabWidth, {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral'],
      offsetTernaryExpressions: true
    }],
    'max-classes-per-file': 'error',
    'max-len': ['warn', {
      // Ignore comment lines that pass the max length limit that have just only
      // an URL or an `import` statement without comments nor named exports.
      // See https://github.com/eslint/eslint/issues/15928
      ignorePattern: '^\\s*((//|\\*)?\\s*\\S*[^:/?#]://[^?#]\\S*\\s*$|import' +
        '\\s([^\\{]|//|/\\*)+)',
      tabWidth
    }],
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    'newline-per-chained-call': 'warn',
    'no-console': 'error',
    'no-extra-boolean-cast': 'error',
    'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 1, maxEOF: 0}],
    'no-nested-ternary': 'warn',
    'no-new': 'warn',
    'no-param-reassign': 'off',  // NOTE: Opinionated
    'no-plusplus': 'warn',
    'no-shadow': 'warn',
    'no-tabs': 'error',
    'no-undef-init': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'off',  // Disabled for `unused-imports/no-unused-imports`
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-void': ['error', {allowAsStatement: true}],
    'object-curly-newline': ['error', {consistent: true, multiline: true}],
    'object-curly-spacing': 'error',
    'one-var': ['error', 'never'],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: true
      }
    ],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true}],
    'require-duplicate/no-duplicate': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys': 'off',  // Disabled for `sort-keys-fix`
    'sort-keys/sort-keys-fix': ['error', 'asc', {natural: true}],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_'
      }
    ]
  }
};
