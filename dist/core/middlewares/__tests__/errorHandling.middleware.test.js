"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_mocks_http_1 = tslib_1.__importDefault(require("node-mocks-http"));
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const errorHandler_1 = tslib_1.__importDefault(require("../../utils/errorHandler"));
const errorHandling_middleware_1 = tslib_1.__importDefault(require("../errorHandling.middleware"));
describe('Error middleware', () => {
    test('should delegate error to the centralized error handler and send 500 response', () => {
        const error = new Error('Very sophisticated error');
        const res = node_mocks_http_1.default.createResponse();
        const statusSpy = jest.spyOn(res, 'status');
        const errorHandlerSpy = jest.spyOn(errorHandler_1.default, 'handleError');
        const next = jest.fn();
        (0, errorHandling_middleware_1.default)(error, node_mocks_http_1.default.createRequest(), res, next);
        expect(statusSpy).toHaveBeenCalledWith(http_status_1.default.INTERNAL_SERVER_ERROR);
        expect(errorHandlerSpy).toHaveBeenCalledWith(error);
    });
});
//# sourceMappingURL=errorHandling.middleware.test.js.map