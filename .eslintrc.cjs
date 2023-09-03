module.exports = {
  // Specify your project's supported environments (e.g., browser, node, etc.)
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // Define your project's coding standards and rules
  extends: 'eslint:recommended',
  // Add any additional rules or overrides here
  rules: {
    // Example rule: enforce using double quotes for strings
    'quotes': ['error', 'single'],
    // Add more rules here as needed
  },
  parserOptions: {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ["react", "react-hooks"],
};
