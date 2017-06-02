var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'writer_index';
	locals.filters = {
		writer: req.params.writer,
	};
	locals.data = {
		writers: [],
	};

	// Load the current writer
	view.on('init', function (next) {

		var q = keystone.list('Writer').model.findOne({
			state: 'confirmed',
			slug: locals.filters.writer,
		}).populate('author');

		q.exec(function (err, result) {
			locals.data.writer = result;
			next(err);
		});

	});

	// Load other writers
	view.on('init', function (next) {

		var q = keystone.list('Writer').model.find().where('state', 'active').populate('author').limit('4');

		q.exec(function (err, results) {
			locals.data.writers = results;
			next(err);
		});

	});

	// Render the view
	view.render('writer');
};
