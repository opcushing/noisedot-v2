import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const dotSchema = new mongoose.Schema({
  description: String,
  public: Boolean,
  owner: ObjectId,
  createdAt: Date,
  location : {
    lat: Number,
    lng: Number
  },
  tags: [String],
  sound: String
});

export default mongoose.model('Dot', dotSchema);