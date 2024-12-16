import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable the JSX scope check
      // Add any other rules here if necessary
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
  pluginJs.configs.recommended, // Recommended ESLint rules
  tseslint.configs.recommended, // Recommended TypeScript rules
  pluginReact.configs.recommended, // Recommended React rules
];
