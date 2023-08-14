import { Router } from 'express';
import validation from '@core/middlewares/validate.middleware';
import {
  encodeUrl,
  decodeUrl,
} from '@components/shortening/shortening.controller';
import encodeUrlValidation from '@components/shortening/validators/encodeUrl.validation';
import decodeUrlValidation from '@components/shortening/validators/decodeUrl.validation';
import { shorteningPrefix } from '@core/consts';
const router: Router = Router();
const prefix = shorteningPrefix;

router.post(`/${prefix}/encode`, [validation(encodeUrlValidation)], encodeUrl);
router.post(`/${prefix}/decode`, [validation(decodeUrlValidation)], decodeUrl);

export default router;
