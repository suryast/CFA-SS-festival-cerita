var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'writer_index';
	locals.filters = {
		writer: req.params.writer,
	};
	locals.data = {
		writers: [],
	};

	// Load the writers
	view.on('init', function (next) {

		var q = keystone.list('Writer').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10,
			filters: {
				state: 'confirmed',
			},
		})
			.populate('author');

		// if (locals.data.category) {
		// 	q.where('categories').in([locals.data.category]);
		// }

		q.exec(function (err, results) {
			locals.data.writers = results;
			next(err);
		});
	});

	// Render the view
	view.render('writer_index');
};
