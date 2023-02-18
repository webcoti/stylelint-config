const standard = require('stylelint-config-standard-scss')
const recommended = require('stylelint-config-recommended-scss')

const scssRules = { ...standard.rules, ...recommended.rules }

// pega todas as regras que não começam com scss
const rules = Object.keys(scssRules)
	.filter(key => !key.startsWith('scss'))
	.reduce((acc, key) => Object.assign(acc, { [key]: scssRules[key] }), {})

module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended',
		require.resolve('./base.js'),
	],
	customSyntax: require.resolve('postcss-less'),
	rules,
}
