// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
	'The app should start with the input and the usage instructions': function (browser) {
		browser
			.url('http://localhost:8080/main.html')
			.waitForElementVisible('#app', 5000)
			.assert.elementPresent('.input--blog')
			.assert.elementPresent('.blogs--empty')
			.end()
	}
}
