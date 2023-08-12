"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _app_1 = tslib_1.__importDefault(require("./app.js"));
const config_1 = tslib_1.__importDefault(require("./config/config"));
const logger_1 = tslib_1.__importDefault(require("./core/utils/logger"));
const errorHandler_1 = tslib_1.__importDefault(require("./core/utils/errorHandler"));
const { port } = config_1.default;
const server = _app_1.default.listen(port, () => {
    logger_1.default.info(`Aapplication listens on PORT: ${port}`);
});
const exitHandler = () => {
    if (_app_1.default) {
        server.close(() => {
            logger_1.default.info('Server closed');
            process.exit(1);
        });
    }
    else {
        process.exit(1);
    }
};
const unexpectedErrorHandler = (error) => {
    errorHandler_1.default.handleError(error);
    if (!errorHandler_1.default.isTrustedError(error)) {
        exitHandler();
    }
};
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', (reason) => {
    throw reason;
});
process.on('SIGTERM', () => {
    logger_1.default.info('SIGTERM received');
    if (server) {
        server.close();
    }
});
//# sourceMappingURL=server.js.map