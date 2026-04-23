import { Router, Response } from 'express';
import SiteSetting from '../models/SiteSetting';
import { auth, AuthRequest } from '../middleware/auth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Settings
 *   description: Site settings management endpoints
 */

/**
 * @swagger
 * /api/settings:
 *   get:
 *     summary: Get site settings
 *     description: Retrieve current site settings (public)
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: Site settings
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SiteSetting'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', async (_req, res: Response): Promise<void> => {
  try {
    let settings = await SiteSetting.findOne();
    if (!settings) {
      settings = await SiteSetting.create({
        siteName: 'HiddenPak',
        siteDescription: "Pakistan's Hidden Gems Travel Platform",
        contactEmail: 'info@hiddenpak.com',
        contactPhone: '+92 300 1234567',
      });
    }
    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: (error as Error).message });
  }
});

/**
 * @swagger
 * /api/settings:
 *   put:
 *     summary: Update site settings
 *     description: Update the site settings (requires authentication). Creates settings if none exist.
 *     tags: [Settings]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateSettingsDto'
 *     responses:
 *       200:
 *         description: Settings updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SiteSetting'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.put('/', auth, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    let settings = await SiteSetting.findOne();
    if (!settings) {
      settings = await SiteSetting.create(req.body);
    } else {
      Object.assign(settings, req.body);
      await settings.save();
    }
    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to update settings', error: (error as Error).message });
  }
});

export default router;
