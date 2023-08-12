"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = require("supertest");
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const _app_1 = tslib_1.__importDefault(require("../../../app.js"));
describe('Helathcheck API', () => {
    describe('GET /', () => {
        test('should return 200 status if all OK', async () => {
            await (0, supertest_1.agent)(_app_1.default).get('/').send().expect(http_status_1.default.OK);
        });
    });
});
//# sourceMappingURL=healthCheck.test.js.map