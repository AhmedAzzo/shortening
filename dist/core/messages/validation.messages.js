"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMessages = void 0;
const validationMessages = (key) => ({
    string: `${key} Must be a string!`,
    required: `${key} is required!`,
    min: `${key} must be at least 5 characters long!`,
});
exports.validationMessages = validationMessages;
//# sourceMappingURL=validation.messages.js.map