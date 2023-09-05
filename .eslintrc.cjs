module.exports = {
  // Specify your project's supported environments (e.g., browser, node, etc.)
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // Define your project's coding standards and rules
  extends: [ 'eslint:recommended', 'plugin:react/recommended' ],
  // Add any additional rules or overrides here
  rules: {
    // Rule: enforce using single quotes for strings
    'quotes': ['error', 'single'],
    // Add more rules here as needed
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  },
  parserOptions: {
    'ecmaVersion': 12,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  plugins: ['react', 'react-hooks'],
};
