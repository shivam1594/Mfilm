'use strict';

import mongoose from 'mongoose';

var RatingSchema = new mongoose.Schema({
  shivMovie: String,
  name: String,
  review: String,
  rating: String
});

export default mongoose.model('Rating', RatingSchema);
