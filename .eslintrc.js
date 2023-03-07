module.exports = {
  extends: ['airbnb', 'react-app', 'prettier', 'plugin:import/recommended'],
  rules: {
    'no-restricted-imports': ['error'],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    // Suppress errors for missing 'import React' in files. React version 17+ dont require import
    'react/react-in-jsx-scope': 'off',
    // Allow jsx tags inside .js files.
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-curly-newline': 'off',
    // Disable props spreading (<App {...props} />) warning.
    'react/jsx-props-no-spreading': 0,
    // Throw warning instead of error when using array index as a key.
    'react/no-array-index-key': 1,
    // Allow modules with named exports only.
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    // Force {foo: 'bar'} object literal syntax.
    'object-curly-spacing': ['error', 'never'],
    // Throw warning instead of error. Feel free to choose your favorite option https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['warn', 'as-needed'],
    // Make prettier code formatting suggestions more verbose.
    'prettier/prettier': ['warn'],
    // Throw warning when <a href='#'> or <a href='javascript:void(0)'> are used. Use <button> instead.
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    // Allow using (props) => <Component /> and ({propName}) => <Component /> syntax.
    'react/destructuring-assignment': 'off',
    // Disable <Fragment> => <> replacement. Feel free to change
    'react/jsx-fragments': 'off',
    camelcase: ['off'],
    'react/forbid-prop-types': ['off'],
    'no-shadow': [
      'error',
      {
        allow: ['props'],
      },
    ],
  },
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', './src'],
      },
    },
  },
};
