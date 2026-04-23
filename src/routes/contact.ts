import { Router, Response } from 'express';
import ContactMessage from '../models/ContactMessage';
import { auth, AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/', async (req, res: Response): Promise<void> => {
  try {
    const message = new ContactMessage(req.body);
    const saved = await message.save();
    res.status(201).json({ success: true, data: saved, message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to submit message', error: (error as Error).message });
  }
});

router.get('/', auth, async (_req: AuthRequest, res: Response): Promise<void> => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

router.patch('/:id', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!message) {
      res.status(404).json({ success: false, message: 'Message not found' });
      return;
    }
    res.json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

router.delete('/:id', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const message = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!message) {
      res.status(404).json({ success: false, message: 'Message not found' });
      return;
    }
    res.json({ success: true, message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

export default router;
