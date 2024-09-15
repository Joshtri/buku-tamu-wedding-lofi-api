// routes/guest.routes.ts

import { Router } from 'express';
import type { Request, Response } from 'express';
import Guest from '../models/guest.model.js';

const router = Router();

// Route to add a new guest entry
router.post('/', async (req: Request, res: Response) => {
    try {
        const newGuest = new Guest({
            name: req.body.name,
            jumlah_tamu: req.body.jumlah_tamu,
            message: req.body.message,
        });
        const savedGuest = await newGuest.save();
        res.status(201).json(savedGuest);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create guest entry' });
    }
});

// Route to get all guest entries
router.get('/', async (req: Request, res: Response) => {
    try {
        const guests = await Guest.find(); // Fetch all guests
        res.status(200).json(guests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve guest entries' });
    }
});


export default router;
