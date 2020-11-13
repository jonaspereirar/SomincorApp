import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import OrderController from './app/controllers/OrderController';

import ForgotPasswordController from './app/controllers/ForgotPasswordController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/passwords', ForgotPasswordController.store);

routes.put('/reset_password/:token', ForgotPasswordController.update);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

// // routes.post('/departamento', Departamento.store);
// routes.put('/departamento', DepartamentoController.update);
// routes.delete('/departamento', DepartamentoController.delete);

routes.get(
  '/users/:user_id/:direction_id/:area_id/:eletric_id/:location_id/orders',
  OrderController.index
);
routes.post('/users/:user_id/orders', OrderController.store);

export default routes;
