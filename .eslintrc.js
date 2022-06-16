module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@mafalda/recommended',
    'plugin:import/recommended',
    'plugin:json/recommended',
    'plugin:node/recommended'
  ],
  overrides: [
    {
      env: {
        'jest/globals': true
      },
      extends: ['plugin:jest/all'],
      files: ['__tests__/**'],
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-hooks': ['error', { allow: ['afterEach', 'beforeEach'] }],
        'jest/require-top-level-describe': 'off',
        'no-focused-tests': 'error'
      }
    },
    {
      extends: [
        'plugin:@mafalda/typescript',
        // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript'
      ],
      files: ['*.ts'],
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser
      parserOptions: {
        project: './tsconfig*.json'
      },
      plugins: ['@typescript-eslint'], // Enables support for TypeScript
      rules: {
        '@typescript-eslint/ban-ts-comment': ['error', {
          minimumDescriptionLength: 8,
          'ts-ignore': 'allow-with-description'
        }],
        '@typescript-eslint/no-shadow': 'error',
        // Disabled for `unused-imports/no-unused-imports`
        '@typescript-eslint/no-unused-vars': 'off',
        // '@typescript-eslint/no-unsafe-argument': 'warn',
        // '@typescript-eslint/no-unsafe-assignment': 'warn',
        // '@typescript-eslint/no-unsafe-call': 'warn',
        // '@typescript-eslint/no-unsafe-member-access': 'warn',
        // '@typescript-eslint/no-unsafe-return': 'warn',
        'no-shadow': 'off'  // Conflicts with `@typescript-eslint/no-shadow`
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2020,  // Node.js 12
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: ['sort-destructure-keys', 'sort-keys', 'unused-imports'],
  rules: {
    '@mafalda/brace-style': [
      'error', 'allman-multiline', { allowSingleLine: true }
    ],
    'arrow-body-style': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'error',
    'comma-dangle': 'error',
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    curly: ['error', 'multi-line'],
    'function-paren-newline': ['error', 'consistent'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-named-as-default': 'warn',
    'import/order': [
      'error',
      {
        alphabetize: {order: 'asc'},
        'newlines-between': 'always',
        warnOnUnassignedImports: true
      }
    ],
    'import/prefer-default-export': 'warn',
    indent: ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral'],
      offsetTernaryExpressions: true
    }],
    'max-classes-per-file': 'error',
    'max-len': ['warn', {
      ignorePattern: '^\\s*(//|\\*)?\\s*\\S*[^:/?#]://[^?#]\\S*\\s*$',
      tabWidth: 2
    }],
    'newline-per-chained-call': 'warn',
    'no-console': 'error',
    'no-extra-boolean-cast': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],
    'no-nested-ternary': 'warn',
    'no-new': 'warn',
    'no-param-reassign': 'warn',
    'no-plusplus': 'warn',
    'no-shadow': 'warn',
    'no-tabs': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'off',  // Disabled for `unused-imports/no-unused-imports`
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['warn', 'before'],
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
    quotes: ['error', 'single', { avoidEscape: true }],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys': 'off',  // disable eslint `sort-keys` for `sort-keys-fix`
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
