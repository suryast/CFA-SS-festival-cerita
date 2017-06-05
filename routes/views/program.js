var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'program';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		events: [],
		categories: [],
	};

	// Load all categories
	view.on('init', function (next) {

		keystone.list('EventCategory').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.categories = results;

			// Load the counts for each category
			async.each(locals.data.categories, function (category, next) {

				keystone.list('Event').model.count().where('categories').in([category.id]).exec(function (err, count) {
					category.eventCount = count;
					next(err);
				});

			}, function (err) {
				next(err);
			});
		});
	});

	// Load the current category filter
	view.on('init', function (next) {

		if (req.params.category) {
			keystone.list('EventCategory').model.findOne({ key: locals.filters.category }).exec(function (err, result) {
				locals.data.category = result;
				next(err);
			});
		} else {
			next();
		}
	});

	// Load the events
	view.on('init', function (next) {

		var q = keystone.list('Event').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10,
		})
			.sort('-publishedDate')
			.populate('creator categories');

		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}

		q.exec(function (err, results) {
			locals.data.events = results;
			next(err);
		});
	});

	// Render the view
	view.render('program');
};
