"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const healthCheck_router_1 = tslib_1.__importDefault(require("./components/healthcheck/healthCheck.router"));
const shortening_router_1 = tslib_1.__importDefault(require("./components/shortening/shortening.router"));
const router = (0, express_1.Router)();
router.use(healthCheck_router_1.default);
router.use(shortening_router_1.default);
exports.default = router;
//# sourceMappingURL=api.js.map