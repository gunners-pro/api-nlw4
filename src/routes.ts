import { Router } from 'express';
import UserController from './controllers/UserController';

const Routes = Router();

Routes.post('/users', UserController.create);

export default Routes;
