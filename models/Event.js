var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Model
 * ==========
 */

var Event = new keystone.List('Event', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Event.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'confirmed, tbc', default: 'confirmed', index: true },
	event_time: { type: Types.Datetime },
	waktu: {type: Types.Html, wysiwyg: false, height: 50},
	creator: { type: Types.Relationship, ref: 'User', index: true },
	image: { type: Types.CloudinaryImage },
	eventbrite_link: {type: Types.Url},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'EventCategory', many: true },
	panels: { type: Types.Relationship, ref: 'Writer', many: true, index: true },
});

Event.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Event.defaultColumns = 'title, waktu|20%, state|20%, panels|20%, categories|20%';

Event.register();
