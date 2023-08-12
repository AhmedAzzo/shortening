"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const tslib_1 = require("tslib");
const appError_1 = tslib_1.__importDefault(require("../../core/utils/appError"));
const logger_1 = tslib_1.__importDefault(require("../../core/utils/logger"));
const http_status_1 = tslib_1.__importDefault(require("http-status"));
// let urlStorage: Array<Iurl> = [];
/**
  * Returns the target short url.
  *
  * @remarks
  * This method is responible to get  the original url and returns the target short url.
  *
  * @param {originalUrl} - an Object contains the original url, string.
  * @returns shortUrl, short url string
  *
  */
const encode = ({ originalUrl }) => {
    // if (userStorage.push(user)) {
    try {
        logger_1.default.debug(`System start generating short URL from your long one`, originalUrl);
        const shortUrl = 'shortUrl';
        return shortUrl;
    }
    catch (error) {
        throw new appError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error);
    }
};
exports.encode = encode;
/**
  * Returns the original url.
  *
  * @remarks
  * This method is responible to get the short url and returns the original url.
  *
  * @param {shortUrl} - an Object contains the short url, string.
  * @returns originalUrl, original url string
  *
  */
const decode = ({ shortUrl }) => {
    try {
        logger_1.default.debug(`System start generating original url from your shortened one`, shortUrl);
        const originalUrl = 'originalUrl';
        return originalUrl;
    }
    catch (error) {
        throw new appError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error);
    }
};
exports.decode = decode;
//# sourceMappingURL=shortening.service.js.map