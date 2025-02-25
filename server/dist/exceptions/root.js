"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETED = exports.CREATED = exports.OK = exports.ErrorCode = exports.HttpException = void 0;
class HttpException extends Error {
    constructor(message, errorCode, statusCode, errors) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}
exports.HttpException = HttpException;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["USER_NOT_FOUND"] = "USER_NOT_FOUND";
    ErrorCode["USER_ALREADY_EXISTS"] = "USER_ALREADY_EXISTS";
    ErrorCode["INCORRECT_PASSWORD"] = "INCORRECT_PASSWORD";
    ErrorCode["UNPROCESSABLEENTITY"] = "UNPROCESSABLEENTITY";
    ErrorCode["INTERNALEXCEPTION"] = "INTERNALEXCEPTION";
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["INVALIDDOMAIN"] = "INVALIDDOMAIN";
    ErrorCode["INVALID_VERIFICATION_CODE"] = "INVALID_VERIFICATION_CODE";
    ErrorCode["TOO_MANY_REQUESTS"] = "TOO_MANY_REQUESTS";
    ErrorCode["INVALID_ACCESS_TOKEN"] = "INVALID_ACCESS_TOKEN";
    ErrorCode["SESSION_NOT_FOUND"] = "SESSION_NOT_FOUND";
    ErrorCode["CANNOT_DELETE_CURRENT_SESSION"] = "CANNOT_DELETE_CURRENT_SESSION";
    ErrorCode["MISSING_ENV_VARIABLE"] = "MISSING_ENV_VARIABLE";
    ErrorCode["EVENT_NOT_FOUND"] = "EVENT_NOT_FOUND";
    ErrorCode["UPLOAD_FAILED"] = "UPLOAD_FAILED";
    ErrorCode["DELETE_FAILED"] = "DELETE_FAILED";
    ErrorCode["JOB_NOT_FOUND"] = "JOB_NOT_FOUND";
    ErrorCode["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorCode["EMAIL_ALREADY_IN_USE"] = "EMAIL_ALREADY_IN_USE";
    ErrorCode["EMAIL_SAME_AS_CURRENT"] = "EMAIL_SAME_AS_CURRENT";
    ErrorCode["EMAIL_NOT_FOUND"] = "EMAIL_NOT_FOUND";
    ErrorCode["PASSWORD_REQUIRED"] = "PASSWORD_REQUIRED";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
exports.OK = 200;
exports.CREATED = 201;
exports.DELETED = 204;
