var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'volunteer_index';
	locals.filters = {
		volunteer: req.params.volunteer,
	};
	locals.data = {
		volunteers: [],
	};

	// Load the current volunteer
	view.on('init', function (next) {

		var q = keystone.list('Volunteer').model.findOne({
			state: 'active',
			slug: locals.filters.volunteer,
		}).populate('author');

		q.exec(function (err, result) {
			locals.data.volunteer = result;
			next(err);
		});

	});

	// Load other volunteers
	view.on('init', function (next) {

		var q = keystone.list('Volunteer').model.find().where('state', 'active').populate('author').limit('4');

		q.exec(function (err, results) {
			locals.data.volunteers = results;
			next(err);
		});

	});

	// Render the view
	view.render('volunteer');
};
