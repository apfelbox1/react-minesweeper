module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		}
	},
	env: {
		node: true
	},
	settings: {
		react: {
			version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	rules: {
		'indent': ['error', 'tab', { 'SwitchCase': 1, 'ignoredNodes': ['JSXElement'] }],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
		'no-tabs': [0],
		'semi': ['error', 'always'],
		'curly': ['error', 'all'],
		'brace-style': [ 'error', '1tbs', { 'allowSingleLine': false }],
		'no-console': 'warn',
		'eqeqeq': 'error',
		'space-infix-ops': ['error', { 'int32Hint': false }],
		'arrow-spacing': 'error',
		'no-trailing-spaces': 'error',
		'quotes': ['error', 'single'] // Always use double quotes (") for JSX attributes, but single quotes (') for all other JS. --> Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.
	}
};