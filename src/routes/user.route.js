import express from 'express';

import { userController } from '../controllers';

export default express.Router().get('/', userController.getAllUsers);
