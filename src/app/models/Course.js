const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String, minLength: 1, require: true },
    description: { type: String, maxLength: 500 },
    image: { type: String, maxLength: 300 },
    videoId: { type: String, minLength: 1, require: true },
    level: { type: Number, default: 1, minLength: 1 },
    slug: { type: String, slug: 'name', unique: true },

}, {
    timestamps: true,
});

//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Course', Course);