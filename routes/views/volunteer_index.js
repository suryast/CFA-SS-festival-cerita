var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'volunteer_index';
	locals.filters = {
		volunteer: req.params.volunteer,
	};
	locals.data = {
		volunteers: [],
	};

	// Load the volunteers
	view.on('init', function (next) {

		var q = keystone.list('Volunteer').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10,
			filters: {
				state: 'active',
			},
		})
			.populate('author');

		// if (locals.data.category) {
		// 	q.where('categories').in([locals.data.category]);
		// }

		q.exec(function (err, results) {
			locals.data.volunteers = results;
			next(err);
		});
	});

	// Render the view
	view.render('volunteer_index');
};
