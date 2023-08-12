"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const messages_1 = require("../../../core/messages");
const encodeUrlValidation = {
    body: joi_1.default.object().keys({
        originalUrl: joi_1.default.string().required().min(5)
            .messages({
            'string': (0, messages_1.validationMessages)('originalUrl').string,
            'any.required': (0, messages_1.validationMessages)('originalUrl').required,
            'string.min': (0, messages_1.validationMessages)('originalUrl').min,
        }),
    }),
};
exports.default = encodeUrlValidation;
//# sourceMappingURL=encodeUrl.validation.js.map