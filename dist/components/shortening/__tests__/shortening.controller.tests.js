"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = require("supertest");
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const _app_1 = tslib_1.__importDefault(require("../../../app.js"));
const encodeUrl = jest.fn();
const decodeUrl = jest.fn();
const encodeMock = {
    originalUrl: 'www.google.com',
};
const decodeMock = {
    // TODO: add correct mock data
    shortUrl: 'to be added',
};
const noDataMock = {};
jest.mock('@components/shortening/shortening.service', () => ({
    encode: () => encodeUrl(),
    decode: () => decodeUrl(),
}));
describe('Encode API', () => {
    describe('Create User [POST] /shortening/encode', () => {
        test('should return 201 status if system generated short url succesfully', async () => {
            await (0, supertest_1.agent)(_app_1.default)
                .post('/shortening/encode')
                .send(encodeMock)
                .expect(http_status_1.default.CREATED);
        });
        test('should return 400 status with validation error message if missing original url data', async () => {
            const res = await (0, supertest_1.agent)(_app_1.default)
                .post('/shortening/encode')
                .send(noDataMock)
                .expect(http_status_1.default.BAD_REQUEST);
            expect(res.body.error).toContain('is required');
        });
    });
});
describe('Decode API', () => {
    describe('Create User [POST] /shortening/decode', () => {
        test('should return 201 status if system generated original url succesfully', async () => {
            await (0, supertest_1.agent)(_app_1.default)
                .post('/shortening/decode')
                .send(decodeMock)
                .expect(http_status_1.default.CREATED);
        });
        test('should return 400 status with validation error message if missing short url data', async () => {
            const res = await (0, supertest_1.agent)(_app_1.default)
                .post('/shortening/decode')
                .send(noDataMock)
                .expect(http_status_1.default.BAD_REQUEST);
            expect(res.body.error).toContain('is required');
        });
    });
});
//# sourceMappingURL=shortening.controller.tests.js.map