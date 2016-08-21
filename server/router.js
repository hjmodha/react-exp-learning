var express = require('express');

module.exports = function(app){

	//Default configuration
	app.configure(function(){
		app.use('/api', app.router);
	});

	require('./users/route')(app);
}

