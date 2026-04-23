import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/database';

// Route imports
import authRoutes from './routes/auth';
import placesRoutes from './routes/places';
import blogsRoutes from './routes/blogs';
import galleryRoutes from './routes/gallery';
import testimonialsRoutes from './routes/testimonials';
import contactRoutes from './routes/contact';
import settingsRoutes from './routes/settings';
import analyticsRoutes from './routes/analytics';

const app = express();
const PORT = process.env.PORT || 5000;

// CORS — allow frontend origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://hiddenpak.com',
  'https://www.hiddenpak.com',
  // Vercel preview deployments
  /^https:\/\/hiddenpak.*\.vercel\.app$/,
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    const allowed = allowedOrigins.some(o =>
      typeof o === 'string' ? o === origin : o.test(origin)
    );
    if (allowed) return callback(null, true);
    callback(new Error(`CORS: origin ${origin} not allowed`));
  },
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));

// Ensure DB is connected before every request (critical for Vercel serverless)
app.use(async (_req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: 'Database connection failed' });
  }
});

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/places', placesRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/analytics', analyticsRoutes);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Only start HTTP server when running locally (not in Vercel serverless)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`HiddenPak API running on port ${PORT}`);
  });
}

export default app;
