const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const CourseSchema = new Schema({
    _id: { type: Number, },
    name: { type: String, minLength: 1, require: true },
    description: { type: String, maxLength: 500 },
    image: { type: String, maxLength: 300 },
    videoId: { type: String, minLength: 1, require: true },
    level: { type: Number, default: 1, minLength: 1 },
    slug: { type: String, slug: 'name', unique: true },

}, {
    _id: false,
    timestamps: true,
});


//Custom query helpers
CourseSchema.query.sortable = function(req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;

}
//Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Course', CourseSchema);