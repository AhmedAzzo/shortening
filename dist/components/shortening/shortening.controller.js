"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeUrl = exports.encodeUrl = void 0;
const tslib_1 = require("tslib");
const http_status_1 = tslib_1.__importDefault(require("http-status"));
const shortening_service_1 = require("../shortening/shortening.service");
const messages_1 = require("../../core/messages");
const encodeUrl = (req, res) => {
    const encodeBody = req.body;
    const data = (0, shortening_service_1.encode)(encodeBody);
    res.status(http_status_1.default.CREATED);
    res.send({
        message: messages_1.responseMessages.shortUrlGenerated,
        data: {
            shortUrl: data
        }
    });
};
exports.encodeUrl = encodeUrl;
const decodeUrl = (req, res) => {
    const decodeBody = req.body;
    const data = (0, shortening_service_1.decode)(decodeBody);
    res.status(http_status_1.default.CREATED);
    res.send({
        message: messages_1.responseMessages.originalUrlGenerated,
        data: {
            originalUrl: data
        }
    });
};
exports.decodeUrl = decodeUrl;
//# sourceMappingURL=shortening.controller.js.map