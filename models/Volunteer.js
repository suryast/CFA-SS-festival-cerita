var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Volunteer Model
 * ==========
 */

var Volunteer = new keystone.List('Volunteer', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Volunteer.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'active,inactive', default: 'active', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
	},
});

Volunteer.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Volunteer.defaultColumns = 'title, state|20%, author|20%';
Volunteer.register();
