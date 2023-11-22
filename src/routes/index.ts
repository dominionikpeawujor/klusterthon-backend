import { Request, Response ,Router } from 'express';
import chat from './v1/gpt';

const routes: Router = Router();
routes.use('/chat', chat);

routes.get('/', (_req: Request, res: Response) => {
  res.send('Welcome!');
});

export default routes;
