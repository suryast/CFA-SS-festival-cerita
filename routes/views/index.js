var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Init locals
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		posts: [],
		events: [],
		categories: [],
		event_categories: [],
		writers:[],
	};

	// Load all categories
	view.on('init', function (next) {

		keystone.list('PostCategory').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.categories = results;

			// Load the counts for each category
			async.each(locals.data.categories, function (category, next) {

				keystone.list('Post').model.count().where('categories').in([category.id]).exec(function (err, count) {
					category.postCount = count;
					next(err);
				});

			}, function (err) {
				next(err);
			});
		});
	});

	// Load all categories
	view.on('init', function (next) {

		keystone.list('EventCategory').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.event_categories = results;

			// Load the counts for each category
			async.each(locals.data.event_categories, function (event_category, next) {

				keystone.list('Event').model.count().where('categories').in([event_category.id]).exec(function (err, count) {
					event_category.eventCount = count;
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
			keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function (err, result) {
				locals.data.category = result;
				next(err);
			});
		} else {
			next();
		}
	});

	// Load the current category filter for events
	view.on('init', function (next) {

		if (req.params.event_category) {
			keystone.list('EventCategory').model.findOne({ key: locals.filters.event_category }).exec(function (err, result) {
				locals.data.event_category = result;
				next(err);
			});
		} else {
			next();
		}
	});

	// Load the posts
	view.on('init', function (next) {

		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 3,
			maxPages: 1,
			filters: {
				state: 'published',
			},
		})
			.sort('-publishedDate')
			.populate('author categories');

		if (locals.data.category) {
			q.where('categories').in([locals.data.category]);
		}

		q.exec(function (err, results) {
			locals.data.posts = results;
			next(err);
		});
	});

	// Load the events
	view.on('init', function (next) {

		var q = keystone.list('Event').paginate({
			page: req.query.page || 1,
			perPage: 3,
			maxPages: 1,
		})
			.sort('-publishedDate')
			.populate('creator categories');

		if (locals.data.event_category) {
			q.where('categories').in([locals.data.event_category]);
		}

		q.exec(function (err, results) {
			locals.data.events = results;
			next(err);
		});
	});

	// Load the writers
	view.on('init', function(next) {

	    var q = keystone.list('Writer').model.find({state: "confirmed"}).sort('-publishedDate').limit(1);

	    q.exec(function(err, results) {
	        locals.data.writer = results;
	        // console.log(results)
	        next(err);
	    });
	});

	// Render the view
	view.render('index');
};
