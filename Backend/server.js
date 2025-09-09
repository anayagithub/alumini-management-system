import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { Image } from './models/Image.js';

dotenv.config();

const app = express();
const port = 5000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/uploads');  // Ensure this path points to the correct uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGODB_URI_GALLERY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/images', async (req, res) => {
  const images = await Image.find();
  res.json(images);
});

app.post('/uploads', upload.single('image'), async (req, res) => {
  const newImage = new Image({ path: req.file.path, originalName: req.file.originalname });
  await newImage.save();
  res.json(newImage);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
