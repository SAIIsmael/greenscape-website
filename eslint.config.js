import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import { Linter } from "eslint";
import parser from "@typescript-eslint/parser"; // Explicitly import the parser

/** @type {Linter.Config[]} */
export default [
  {
    files: ["**/*.{ts,tsx}"], // TypeScript files
    languageOptions: {
      globals: globals.browser, // Browser globals
      parser: parser, // Set the parser to @typescript-eslint/parser
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax for React
        },
        ecmaVersion: "latest", // Latest ECMAScript version
        sourceType: "module", // Use ES6 modules
      },
    },
    plugins: {
      react: pluginReact, // React plugin
      "@typescript-eslint": tseslint, // TypeScript plugin
    },
    rules: {
      // Manually include recommended rules for ESLint, React, and TypeScript
      ...pluginJs.configs.recommended.rules, // ESLint recommended rules
      ...tseslint.configs.recommended.rules, // TypeScript recommended rules
      ...pluginReact.configs.recommended.rules, // React recommended rules

      "react/react-in-jsx-scope": "off", // Disable React in JSX scope (React 17+)
      "react/prop-types": "off", // Disable prop-types when using TypeScript
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];