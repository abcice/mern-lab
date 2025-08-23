import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors';
import checkToken from './config/checkToken.js';
import ensureLoggedIn from './config/ensureLoggedIn.js';
import userRoutes from './routes/api/users.js';
import hootRoutes from './routes/api/hoots.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use('/api/users', userRoutes);
app.use('/api/hoots',checkToken, ensureLoggedIn, hootRoutes);

const staticDir = process.env.NODE_ENV === 'production' ? 'dist' : 'public';
const indexPath = process.env.NODE_ENV === 'production' ? 'dist/index.html' : 'index.html';

app.use(express.static(staticDir));



app.get(/.*/, (req, res) => {
    // Serve the React app for all other routes
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path.resolve(path.join(__dirname, indexPath)));
});

export default app; /* You better have this in your project */