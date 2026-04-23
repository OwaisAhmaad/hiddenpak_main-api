import { Router, Response } from 'express';
import Place from '../models/Place';
import { auth, AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/', async (_req, res: Response): Promise<void> => {
  try {
    const places = await Place.find().sort({ createdAt: -1 });
    res.json({ success: true, data: places });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

router.get('/:id', async (req, res: Response): Promise<void> => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      res.status(404).json({ success: false, message: 'Place not found' });
      return;
    }
    res.json({ success: true, data: place });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

router.post('/', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const place = new Place(req.body);
    const saved = await place.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to create place', error: (error as Error).message });
  }
});

router.put('/:id', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!place) {
      res.status(404).json({ success: false, message: 'Place not found' });
      return;
    }
    res.json({ success: true, data: place });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to update place', error: (error as Error).message });
  }
});

router.delete('/:id', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) {
      res.status(404).json({ success: false, message: 'Place not found' });
      return;
    }
    res.json({ success: true, message: 'Place deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

export default router;
