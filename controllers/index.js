// CLIENT VIEW CONTROLLER
var dummyData = require('../models/dummy-data.js');

var indexController = {
	// This route directs what happens for the client
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res) {
		// request is what is sent from the client
		var searchQuery = req.body.searchItem;
		console.log('searchQuery: ', searchQuery);

		var description;
		for (var language in dummyData.programming) {
			if(searchQuery === language) {
				description = dummyData.programming[language].desc;
			}
		}

		// send the matched language/description pair back to the client
		res.send({lang: language, desc: description});
	}
};

module.exports = indexController;