import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
});

export const Image = mongoose.model('Image', imageSchema);


// 9k8How5Zyr5d3f21