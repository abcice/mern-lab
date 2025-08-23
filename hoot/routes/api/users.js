import express from 'express';

import {  checkToken,
  dataController,
  apiController} from '../../controllers/api/users.js';
  import ensureLoggedIn from '../../config/ensureLoggedIn.js';
  const router = express.Router();
  router.post('/', dataController.create, apiController.auth)
  router.post('/login', dataController.login, apiController.auth)
  router.get('/check-token', ensureLoggedIn, checkToken)
  export default router;

