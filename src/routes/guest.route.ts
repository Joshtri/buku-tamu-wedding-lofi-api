// routes/guest.routes.ts

import { Router } from 'express';
import type { Request, Response } from 'express';
import Guest from '../models/guest.model.ts';

const router = Router();

// Route to add a new guest entry
router.post('/', async (req: Request, res: Response) => {
    try {
        const newGuest = new Guest({
            name: req.body.name,
            message: req.body.message,
        });
        const savedGuest = await newGuest.save();
        res.status(201).json(savedGuest);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create guest entry' });
    }
});

export default router;
