import { Router } from 'express';
import { chat } from './v1';

const routes: Router = Router();
routes.use('/chat', chat);

export default routes;
