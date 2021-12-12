module.exports = {
  env: {
    commonjs: true,
    es6: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'react',
  ],
  rules: {
    'object-curly-newline': [1, {
      minProperties: 1,
    }],
    'object-property-newline': [1, {
      allowAllPropertiesOnSameLine: false,
    }],
    'consistent-return': 0,
    'arrow-body-style': [0],
    'no-new-func': 0,
    'multiline-ternary': [1, 'always'],
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': 0,
    'no-trailing-spaces': ['warn'],
    'guard-for-in:': 0,
    'no-debugger': 1,
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-first-prop-new-line': [1, 'always'],
    'react/jsx-max-props-per-line': [1,
      {
        maximum: 1,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
    quotes: [1, 'single', 'avoid-escape'],
    indent: ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['JSXAttribute'],
    }],
    'function-paren-newline': ['error', 'multiline'],
    'react/jsx-one-expression-per-line': [1],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    // Вернуть обратно
    'no-unused-vars': 1,
    'no-console': 1,
  },
};
