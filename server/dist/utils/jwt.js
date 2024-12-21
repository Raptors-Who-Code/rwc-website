"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = exports.refreshTokenSignOptions = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
const defaults = {
    audience: ["user"],
};
const accessTokenSignOptions = {
    expiresIn: "15m",
    secret: secrets_1.JWT_SECRET,
};
exports.refreshTokenSignOptions = {
    expiresIn: "30d",
    secret: secrets_1.JWT_REFRESH_SECRET,
};
const signToken = (payload, options) => {
    const _a = options || accessTokenSignOptions, { secret } = _a, signOpts = __rest(_a, ["secret"]);
    return jsonwebtoken_1.default.sign(payload, secret, Object.assign(Object.assign({}, defaults), signOpts));
};
exports.signToken = signToken;
const verifyToken = (token, options) => {
    const _a = options || {}, { secret = secrets_1.JWT_SECRET } = _a, verifyOpts = __rest(_a, ["secret"]);
    try {
        const payload = jsonwebtoken_1.default.verify(token, secret, Object.assign(Object.assign({}, defaults), verifyOpts));
        return { payload };
    }
    catch (error) {
        return { error: error.message };
    }
};
exports.verifyToken = verifyToken;