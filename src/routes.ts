import { Router } from 'express';
import SurveyController from './controllers/SurveyController';
import UserController from './controllers/UserController';

const Routes = Router();

Routes.post('/users', UserController.create);
Routes.get('/surveys', SurveyController.show);
Routes.post('/surveys', SurveyController.create);

export default Routes;
