import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
        semi: 'error',
        'prefer-const': 'error',
        quotes: ['error', 'single']
    },
    // "env": {
    //     "es6": true,
    //     "browser": true
    // },
    // "extends": [
    //     "eslint:recommended"
    // ],
},
  pluginJs.configs.recommended,
];