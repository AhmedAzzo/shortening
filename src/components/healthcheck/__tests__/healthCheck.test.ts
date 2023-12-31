import { agent as request } from 'supertest';
import httpStatus from 'http-status';

import app from '@app';

describe('Helathcheck API', () => {
  describe('GET /', () => {
    test('should return 200 status if all OK', async () => {
      await request(app).get('/').send().expect(httpStatus.OK);
    });
  });
});
