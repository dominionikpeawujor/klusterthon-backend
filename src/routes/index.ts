import { Router,  } from "express";
import version1 from './v1';

const routes: Router = Router();
routes.use('/v1', version1 );

// routes.get('/', (req,_) => {
    
// });

export default routes;