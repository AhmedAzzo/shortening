import { Router } from 'express';
import healthcheck from './healthCheck.controller';

const router: Router = Router();
// we define this route to be used by cloud providers like GCP to check if the service is up
router.get('/', healthcheck);
export default router;
