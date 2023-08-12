"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const appError_1 = tslib_1.__importDefault(require("../utils/appError"));
/*
 * Validate request according to the defined validation Schema (see `validations` directory)
 * The request's body, params or query properties may be checked only.
 * An operational AppError is thrown if data validation fails.
 * In case of success, go to the next middleware
 */
const validate = (schema) => (req, res, next) => {
    /* eslint-disable */
    const pickObjectKeysWithValue = (Object, Keys) => Keys.reduce((o, k) => ((o[k] = Object[k]), o), {});
    /* eslint-enable */
    const definedSchemaKeys = Object.keys(schema);
    const acceptableSchemaKeys = ['params', 'query', 'body'];
    const filterOutNotValidSchemaKeys = Object.keys(schema).filter((k) => acceptableSchemaKeys.includes(k));
    if (filterOutNotValidSchemaKeys.length !== definedSchemaKeys.length) {
        const e = `Wrongly defined validation Schema keys: [${definedSchemaKeys}], allowed keys: [${acceptableSchemaKeys}]`;
        throw new appError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, e, false);
    }
    const validSchema = pickObjectKeysWithValue(schema, filterOutNotValidSchemaKeys);
    const object = pickObjectKeysWithValue(req, Object.keys(validSchema));
    const { value, error } = joi_1.default.compile(validSchema)
        .prefs({ errors: { label: 'key' } })
        .validate(object);
    if (error) {
        const errorMessage = error.details
            .map((details) => details.message)
            .join(', ');
        console.log('errorMessage', errorMessage);
        return next(new appError_1.default(http_status_1.default.BAD_REQUEST, errorMessage));
    }
    Object.assign(req, value);
    return next();
};
exports.default = validate;
//# sourceMappingURL=validate.middleware.js.map