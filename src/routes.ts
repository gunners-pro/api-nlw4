import { Router } from 'express';
import SurveyController from './controllers/SurveyController';
import UserController from './controllers/UserController';
import SendMailController from './controllers/SendMailController';
import AnswerController from './controllers/AnswerController';
import NpsController from './controllers/NpsController';

const Routes = Router();

Routes.post('/users', UserController.create);
Routes.get('/surveys', SurveyController.show);
Routes.post('/surveys', SurveyController.create);
Routes.post('/sendMail', SendMailController.execute);
Routes.get('/answer/:value', AnswerController.execute);

Routes.get('/nps/:survey_id', NpsController.execute);

export default Routes;
