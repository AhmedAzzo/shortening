import { Router } from 'express';
import healthCheckRoutes from '@components/healthcheck/healthCheck.router';
import shorteningRoutes from '@components/shortening/shortening.router';

const router: Router = Router();

router.use(healthCheckRoutes);
router.use(shorteningRoutes);



export default router;
