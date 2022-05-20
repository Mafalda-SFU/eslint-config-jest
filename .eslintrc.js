module.exports = {
  extends: [
    'eslint:recommended',
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
        'jest/no-hooks': 'off',
        'jest/require-top-level-describe': 'off',
        'no-focused-tests': 'error'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2020  // Node.js 12
  },
  plugins: ['sort-destructure-keys', 'sort-keys'],
  rules: {
    'arrow-body-style': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', 'allman', { allowSingleLine: true }],
    'comma-dangle': 'error',
    curly: ['error', 'multi-line'],
    'function-paren-newline': ['error', 'multiline-arguments'],
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
    'import/prefer-default-export': 'warn',
    indent: ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral'],
      offsetTernaryExpressions: true
    }],
    'max-len': ['warn', {
      tabWidth: 2
    }],
    'newline-per-chained-call': 'warn',
    'no-extra-boolean-cast': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],
    'no-nested-ternary': 'warn',
    'no-new': 'warn',
    'no-param-reassign': 'warn',
    'no-plusplus': 'warn',
    'no-restricted-globals': [
      'error',
      'event',
      {
        message: 'Avoid using setInterval.',
        name: 'clearInterval'
      },
      {
        message: 'Avoid using setInterval.',
        name: 'setInterval'
      }
    ],
    'no-restricted-properties': [
      'error',
      {
        message: 'Avoid using event.',
        object: 'window',
        property: 'event'
      },
      {
        message: 'Avoid using setInterval.',
        object: 'window',
        property: 'clearInterval'
      },
      {
        message: 'Avoid using setInterval.',
        object: 'window',
        property: 'setInterval'
      }
    ],
    'no-tabs': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
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
    'sort-keys': 'off',  // disable default eslint sort-keys
    'sort-keys/sort-keys-fix': ['error', 'asc', {natural: true}]
  }
};
