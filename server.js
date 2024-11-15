import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS for requests from your frontend
app.use(cors({
  origin: 'https://404-not-found-automatex-hackathon-meraz5-0.vercel.app/', 
}));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Endpoint to handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Serve static files from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.delete('/delete-image', (req, res) => {
  const imagePath = path.join(__dirname, 'uploads', req.query.filename);
  
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error('Error deleting image:', err);
      return res.status(500).json({ message: 'Failed to delete image' });
    }
    res.status(200).json({ message: 'Image deleted successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
