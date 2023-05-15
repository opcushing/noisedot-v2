import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const walkSchema = new mongoose.Schema({
  name: String,
  description: String,
  public: Boolean,
  owner: ObjectId,
  createdAt: Date,
  posts: [ObjectId],
});

export default mongoose.model('Walk', walkSchema);