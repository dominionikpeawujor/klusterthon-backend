import { Request, Response ,Router } from 'express';
import gpt from './v1/gpt';
import lg from './v1/langchain'

const routes: Router = Router();
routes.use('/diagnose', gpt);
routes.use('/langchain', lg);

routes.get('/', (_req: Request, res: Response) => {
  res.send('Welcome!');
});

export default routes;
