"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// test base func
const supertest_1 = require("supertest");
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const _app_1 = tslib_1.__importDefault(require("../../../app.js"));
describe('Bad requests', () => {
    test('should return 404 if no resource', async () => {
        await (0, supertest_1.agent)(_app_1.default)
            .get('/404/not-found-url')
            .send()
            .expect(http_status_1.default.NOT_FOUND);
    });
});
//# sourceMappingURL=404.test.js.map