var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 100 },
  category: {
    type: String,
    required: true,
    enum: ['Fiction', 'Non-Fiction', 'Romance', 'Military History'],
    default: 'Fiction'
  }
});

// Virtual for author's URL
GenreSchema.virtual('url').get(function() {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
