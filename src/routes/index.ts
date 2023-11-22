import { Router } from 'express';
import chat from './v1/gpt';

const routes: Router = Router();
routes.use('/chat', chat);

export default routes;
