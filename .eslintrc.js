module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/prefer-default-export":0,
    "react/state-in-constructor":0,
    "jsx-a11y/no-static-element-interactions":0,
    "jsx-a11y/click-events-have-key-events":0,
    "react/button-has-type":0,
    "react/jsx-props-no-spreading":0
  },
};
