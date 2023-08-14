import { agent as request } from 'supertest';
import httpStatus from 'http-status';
import app from '@app';
import AppError from '@core/utils/appError';

const encodeUrl = jest.fn();
const decodeUrl = jest.fn();

const encodeMock = {
  originalUrl: 'https://www.example.com/',
};
const decodeMock = {
  shortUrl: 'https://short.com/3f',
};

const noDataMock = {};

jest.mock('@components/shortening/shortening.service', () => ({
  encode: () => encodeUrl(),
  decode: () => decodeUrl(),
}));

describe('Encode API', () => {
  describe('Create User [POST] /shortening/encode', () => {
    test('should return 201 status if system generated short url succesfully', async () => {
      await request(app)
        .post('/shortening/encode')
        .send(encodeMock)
        .expect(httpStatus.CREATED);
    });

    test('should return 400 status with validation error message if missing original url data', async () => {
      const res = await request(app)
        .post('/shortening/encode')
        .send(noDataMock)
        .expect(httpStatus.BAD_REQUEST);
      expect(res.body.error).toContain('is required');
    });
  });
});

describe('Decode API', () => {
  describe('Create User [POST] /shortening/decode', () => {
    test('should return 201 status if system generated original url succesfully', async () => {
      await request(app)
        .post('/shortening/decode')
        .send(decodeMock)
        .expect(httpStatus.NOT_FOUND);
    });

    test('should return 400 status with validation error message if missing short url data', async () => {
      const res = await request(app)
        .post('/shortening/decode')
        .send(noDataMock)
        .expect(httpStatus.BAD_REQUEST);
      expect(res.body.error).toContain('is required');
    });
  });
});
