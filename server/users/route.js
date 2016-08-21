module.exports = function (app) {
	var logic = require('./logic');
	app.get('/users',logic.list)
}