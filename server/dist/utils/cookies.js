"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAuthCookies = exports.setAuthCookies = exports.getRefreshTokenCookieOptions = exports.getAccessTokenCookieOptions = exports.REFRESH_PATH = void 0;
const date_1 = require("./date");
const secrets_1 = require("../secrets");
exports.REFRESH_PATH = "/api/auth/refresh";
const secure = secrets_1.NODE_ENV !== "development";
const defaults = {
    sameSite: "strict",
    httpOnly: true,
    secure: true,
};
const getAccessTokenCookieOptions = () => (Object.assign(Object.assign({}, defaults), { expires: (0, date_1.fifteenMinutesFromNow)() }));
exports.getAccessTokenCookieOptions = getAccessTokenCookieOptions;
const getRefreshTokenCookieOptions = () => (Object.assign(Object.assign({}, defaults), { expires: (0, date_1.thirtyDaysFromNow)(), path: exports.REFRESH_PATH }));
exports.getRefreshTokenCookieOptions = getRefreshTokenCookieOptions;
const setAuthCookies = ({ res, accessToken, refreshToken }) => res
    .cookie("accessToken", accessToken, (0, exports.getAccessTokenCookieOptions)())
    .cookie("refreshToken", refreshToken, (0, exports.getRefreshTokenCookieOptions)());
exports.setAuthCookies = setAuthCookies;
const clearAuthCookies = (res) => res.clearCookie("accessToken").clearCookie("refreshToken", {
    path: exports.REFRESH_PATH,
});
exports.clearAuthCookies = clearAuthCookies;
