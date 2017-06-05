var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'program';
	locals.filters = {
		event: req.params.event,
	};
	locals.data = {
		events: [],
	};

	// Load the current event
	view.on('init', function (next) {

		var q = keystone.list('Event').model.findOne({
			state: 'confirmed',
			slug: locals.filters.event,
		}).populate('creator categories');

		q.exec(function (err, result) {
			locals.data.event = result;
			next(err);
		});

	});

	// Load other events
	view.on('init', function (next) {

		var q = keystone.list('Event').model.find().where('state', 'confirmed').populate('creator').limit('4');

		q.exec(function (err, results) {
			locals.data.events = results;
			next(err);
		});

	});

	// Render the view
	view.render('event');
};
