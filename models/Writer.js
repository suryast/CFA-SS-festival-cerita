var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Writer Model
 * ==========
 */

var Writer = new keystone.List('Writer', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Writer.add({
	name: { type: Types.Name, required: true, index: true },
	state: { type: Types.Select, options: 'confirmed, tbc', default: 'confirmed', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Writer.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Writer.relationship({ ref: 'Event', path: 'events', refPath: 'panels' });

Writer.defaultColumns = 'name, state|20%, author|20%';
Writer.register();
