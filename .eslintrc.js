module.exports = {
  env: { browser: true, node: true },
  plugins: ["react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/babel",
    "prettier/react"
  ],
  rules: {
    indent: ["error", 2],
    semi: ["error", "always"],
    eqeqeq: "warn",
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
