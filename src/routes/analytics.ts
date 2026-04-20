import { Router, Response } from 'express';
import AnalyticsEvent from '../models/AnalyticsEvent';
import { auth, AuthRequest } from '../middleware/auth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: Analytics tracking and reporting endpoints
 */

/**
 * @swagger
 * /api/analytics:
 *   get:
 *     summary: Get analytics summary
 *     description: Retrieve analytics summary including total events, event type breakdown, and recent events (requires authentication)
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analytics summary
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalEvents:
 *                   type: number
 *                   description: Total number of tracked events
 *                 eventTypes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       count:
 *                         type: number
 *                   description: Breakdown of events by type
 *                 recentEvents:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/AnalyticsEvent'
 *                   description: 10 most recent events
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get('/', auth, async (_req: AuthRequest, res: Response): Promise<void> => {
  try {
    const totalEvents = await AnalyticsEvent.countDocuments();
    const eventTypes = await AnalyticsEvent.aggregate([
      { $group: { _id: '$eventType', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);
    const recentEvents = await AnalyticsEvent.find().sort({ createdAt: -1 }).limit(10);

    res.json({ totalEvents, eventTypes, recentEvents });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: (error as Error).message });
  }
});

/**
 * @swagger
 * /api/analytics/event:
 *   post:
 *     summary: Track an analytics event
 *     description: Record a new analytics event (public, no authentication required)
 *     tags: [Analytics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateAnalyticsEventDto'
 *     responses:
 *       201:
 *         description: Event tracked successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnalyticsEvent'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/event', async (req, res: Response): Promise<void> => {
  try {
    const event = new AnalyticsEvent(req.body);
    const saved = await event.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Failed to track event', error: (error as Error).message });
  }
});

export default router;
