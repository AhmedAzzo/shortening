"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const config_1 = tslib_1.__importDefault(require("../../config/config"));
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const healthcheck = (req, res) => {
    // TODO: replace local host with the actual host
    const { port } = config_1.default;
    res.status(http_status_1.default.OK);
    res.send(`<h2>OK: The application is up and running, <a href='http://localhost:` + port + `/docs'>Go to API Document. </a> </h2>`);
};
exports.default = healthcheck;
//# sourceMappingURL=healthCheck.controller.js.map