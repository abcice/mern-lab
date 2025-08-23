import express from 'express';
import {index, create} from '../../controllers/api/hoots.js';
import ensureLoggedIn from '../../config/ensureLoggedIn.js';
const router = express.Router();

router.get('/', ensureLoggedIn, index);
router.post('/', ensureLoggedIn, create);

export default router;
