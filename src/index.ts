import express from 'express';
import type { Request, Response } from 'express';

import connectDB from './config/dbConfig';
import guestRoute from './routes/guest.route';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware to parse JSON
app.use(express.json());


app.use('/',guestRoute)

// Basic route to check server status
app.get('/', (req: Request, res: Response) => {
    res.send('Hello via Bun!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
