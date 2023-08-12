"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerForbidden = exports.swaggerBasePath = void 0;
const tslib_1 = require("tslib");
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const appError_1 = tslib_1.__importDefault(require("../utils/appError"));
const logger_1 = tslib_1.__importDefault(require("../utils/logger"));
const consts_1 = tslib_1.__importDefault(require("../../config/consts"));
const swagger_json_1 = tslib_1.__importDefault(require("../../swagger.json")); // use path and replace it to use new way of swagger docs
const swaggerForbidden = () => {
    logger_1.default.error('Trying to access swagger docs on production');
    throw new appError_1.default(http_status_1.default.FORBIDDEN, 'API docs are not available on production');
};
exports.swaggerForbidden = swaggerForbidden;
const swaggerBasePath = (req, res, next) => {
    const basePath = req.originalUrl.replace(consts_1.default.API_DOCS_PATH, '');
    swagger_json_1.default.basePath = basePath;
    swagger_ui_express_1.default.setup(swagger_json_1.default)(req, res, () => {
        next();
    });
};
exports.swaggerBasePath = swaggerBasePath;
//# sourceMappingURL=swagger.middleware.js.map