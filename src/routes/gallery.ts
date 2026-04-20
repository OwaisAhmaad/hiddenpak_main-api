import { Router, Response } from 'express';
import GalleryImage from '../models/GalleryImage';
import { auth, AuthRequest } from '../middleware/auth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Gallery
 *   description: Gallery image management endpoints
 */

/**
 * @swagger
 * /api/gallery:
 *   get:
 *     summary: Get all gallery images
 *     description: Retrieve a list of all gallery images
 *     tags: [Gallery]
 *     responses:
 *       200:
 *         description: List of gallery images
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GalleryImage'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', async (_req, res: Response): Promise<void> => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
});

/**
 * @swagger
 * /api/gallery/{id}:
 *   get:
 *     summary: Get a single gallery image
 *     description: Retrieve a gallery image by its ID
 *     tags: [Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Gallery image ID
 *     responses:
 *       200:
 *         description: Gallery image details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GalleryImage'
 *       404:
 *         description: Gallery image not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', async (req, res: Response): Promise<void> => {
  try {
    const image = await GalleryImage.findById(req.params.id);
    if (!image) {
      res.status(404).json({ message: 'Gallery image not found' });
      return;
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
});

/**
 * @swagger
 * /api/gallery:
 *   post:
 *     summary: Create a new gallery image
 *     description: Upload a new gallery image entry (requires authentication)
 *     tags: [Gallery]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateGalleryImageDto'
 *     responses:
 *       201:
 *         description: Gallery image created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GalleryImage'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const image = new GalleryImage(req.body);
    const saved = await image.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create gallery image', error: (error as Error).message });
  }
});

/**
 * @swagger
 * /api/gallery/{id}:
 *   delete:
 *     summary: Delete a gallery image
 *     description: Delete a gallery image by ID (requires authentication)
 *     tags: [Gallery]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Gallery image ID
 *     responses:
 *       200:
 *         description: Gallery image deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Gallery image deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Gallery image not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const image = await GalleryImage.findByIdAndDelete(req.params.id);
    if (!image) {
      res.status(404).json({ message: 'Gallery image not found' });
      return;
    }
    res.json({ message: 'Gallery image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
});

export default router;
