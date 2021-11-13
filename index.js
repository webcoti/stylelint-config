module.exports = {
	extends: 'stylelint-config-standard-scss',
	plugins: ['stylelint-no-unsupported-browser-features'],
	rules: {
		'max-nesting-depth': 2,
		'selector-class-pattern': '.*',
		'selector-max-specificity': '0,2,2',
		'selector-max-compound-selectors': 2,
		'plugin/no-unsupported-browser-features': [
			true,
			{
				ignorePartialSupport: true,
			},
		],
	},
}
