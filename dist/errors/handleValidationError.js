"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleValidationError = (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    const errors = [
        {
            path: '',
            message: error.message,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
    };
};
exports.default = handleValidationError;
