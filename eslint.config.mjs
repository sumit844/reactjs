import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["*/src*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["*/src*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules:{
      '@typescript-eslint/no-explicit-any':'off',
      '@typescript-eslint/no-unused-vars':"off",
      "no-unused-vars": "off",
			"no-undef": "off",
      "react/react-in-jsx-scope": "off",
      "prefer-const": "off",
      "react/jsx-key": "off",
      "react/prop-types": "off",
      "react/jsx-key": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      'no-unsafe-optional-chaining': "off",
      "@typescript-eslint/no-this-alias": "off",
      "react/display-name": "off",
      "react/no-find-dom-node": "off",
      
    }
  },
  
]);
