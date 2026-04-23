import { Router, Response } from 'express';
import GalleryImage from '../models/GalleryImage';
import { auth, AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/', async (_req, res: Response): Promise<void> => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.json({ success: true, data: images });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

router.get('/:id', async (req, res: Response): Promise<void> => {
  try {
    const image = await GalleryImage.findById(req.params.id);
    if (!image) {
      res.status(404).json({ success: false, message: 'Gallery image not found' });
      return;
    }
    res.json({ success: true, data: image });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

router.post('/', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const image = new GalleryImage(req.body);
    const saved = await image.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to create gallery image', error: (error as Error).message });
  }
});

router.delete('/:id', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const image = await GalleryImage.findByIdAndDelete(req.params.id);
    if (!image) {
      res.status(404).json({ success: false, message: 'Gallery image not found' });
      return;
    }
    res.json({ success: true, message: 'Gallery image deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

export default router;
