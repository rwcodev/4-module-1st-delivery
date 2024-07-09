import { Router } from 'express'
import { RepairsRoutes } from './repairs/router';

export class AppRoutes {
    
    static get routes(): Router {
        const router = Router();

    //router.use('/api/v1/users')
    Router.use('/api/v1/repairs', RepairsRoutes.routes )

    return router;
    }

}