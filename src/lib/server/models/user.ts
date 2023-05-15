import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const dotSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  posts: [ObjectId],
});

export default mongoose.model('Dot', dotSchema);