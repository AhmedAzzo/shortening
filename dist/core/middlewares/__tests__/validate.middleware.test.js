"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_mocks_http_1 = tslib_1.__importDefault(require("node-mocks-http"));
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const joi_1 = tslib_1.__importDefault(require("joi"));
const appError_1 = tslib_1.__importDefault(require("../../utils/appError"));
const validate_middleware_1 = tslib_1.__importDefault(require("../validate.middleware"));
const messages_1 = require("../../messages");
// example validation schema for node request with provided all three options to valid
const validationSchemaWithAllOptions = {
    body: joi_1.default.object().keys({
        input: joi_1.default.object().keys({
            originalUrl: joi_1.default.string().required().min(5)
                .messages({
                'string': (0, messages_1.validationMessages)('originalUrl').string,
                'any.required': (0, messages_1.validationMessages)('originalUrl').required,
                'string.min': (0, messages_1.validationMessages)('originalUrl').min,
            }),
        }),
    }),
    params: joi_1.default.object().keys({
        action: joi_1.default.string().valid('update', 'add'),
    }),
    query: joi_1.default.object().keys({
        id: joi_1.default.number().integer(),
    }),
};
const skip = null;
describe('Validate middleware', () => {
    test('should call next middleware in the stack with no errors if validation passes', () => {
        const next = jest.fn();
        const res = node_mocks_http_1.default.createResponse();
        const req = node_mocks_http_1.default.createRequest({
            method: 'POST',
            url: '/shortening/encode',
            body: {
                input: {
                    originalUrl: 'www.google.com',
                },
            },
        });
        (0, validate_middleware_1.default)(validationSchemaWithAllOptions)(req, res, next);
        // next function is called with zero arguments if request object is valid
        expect(next.mock.calls[0][0]).toBe(undefined);
        expect(next).toHaveBeenCalled();
    });
    test.each `
    body                                | params            | query                  | validationErr
    ${{ input: {} }}                    | ${skip}           | ${skip}                | ${(0, messages_1.validationMessages)('originalUrl').required}
    ${{ input: { originalUrl: 123 } }}  | ${skip}           | ${skip}                | ${'"originalUrl" must be a string'}
    ${{ input: { originalUrl: "123" } }}| ${skip}           | ${skip}                | ${(0, messages_1.validationMessages)('originalUrl').min}
  `('should throw an app error with error message=$validationErr when request body= $body', ({ body, params, query, validationErr }) => {
        const next = jest.fn();
        const res = node_mocks_http_1.default.createResponse();
        const req = node_mocks_http_1.default.createRequest({
            method: 'POST',
            url: '/shortening/encode',
            body,
            params,
            query,
        });
        (0, validate_middleware_1.default)(validationSchemaWithAllOptions)(req, res, next);
        expect(next).toHaveBeenCalledWith(new appError_1.default(http_status_1.default.BAD_REQUEST, validationErr));
    });
});
//# sourceMappingURL=validate.middleware.test.js.map