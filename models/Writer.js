var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Writer Model
 * ==========
 */

var Writer = new keystone.List('Writer', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Writer.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'confirmed,tbc', default: 'confirmed', index: true },
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

Writer.defaultColumns = 'title, state|20%, author|20%';
Writer.register();
