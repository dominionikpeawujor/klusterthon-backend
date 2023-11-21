"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const v1_1 = require("./v1");
const routes = (0, express_1.Router)();
routes.use('/chat', v1_1.chat);
exports.default = routes;
