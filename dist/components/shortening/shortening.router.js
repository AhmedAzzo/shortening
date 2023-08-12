"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const validate_middleware_1 = tslib_1.__importDefault(require("../../core/middlewares/validate.middleware"));
const shortening_controller_1 = require("./shortening.controller");
const encodeUrl_validation_1 = tslib_1.__importDefault(require("./validators/encodeUrl.validation"));
const decodeUrl_validation_1 = tslib_1.__importDefault(require("./validators/decodeUrl.validation"));
const router = (0, express_1.Router)();
const prefix = 'shortening';
router.post(`/${prefix}/encode`, [(0, validate_middleware_1.default)(encodeUrl_validation_1.default)], shortening_controller_1.encodeUrl);
router.post(`/${prefix}/decode`, [(0, validate_middleware_1.default)(decodeUrl_validation_1.default)], shortening_controller_1.decodeUrl);
exports.default = router;
//# sourceMappingURL=shortening.router.js.map