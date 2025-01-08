"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error_handler_1 = require("../error-handler");
const events_1 = require("../controllers/events");
const verified_1 = require("../middlewares/verified");
const eventRoutes = (0, express_1.Router)();
eventRoutes.post("/", [verified_1.verifiedMiddleware], (0, error_handler_1.errorHandler)(events_1.createEventHandler));
exports.default = eventRoutes;
