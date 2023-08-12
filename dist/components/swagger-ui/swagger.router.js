"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const consts_1 = tslib_1.__importDefault(require("../../config/consts"));
const config_1 = tslib_1.__importDefault(require("../../config/config"));
const swagger_middleware_1 = require("../../core/middlewares/swagger.middleware");
const router = (0, express_1.Router)();
if (config_1.default.env !== 'production') {
    router.use(consts_1.default.API_DOCS_PATH, swagger_ui_express_1.default.serve, swagger_middleware_1.swaggerBasePath);
}
else {
    router.use(consts_1.default.API_DOCS_PATH, swagger_middleware_1.swaggerForbidden);
}
exports.default = router;
//# sourceMappingURL=swagger.router.js.map