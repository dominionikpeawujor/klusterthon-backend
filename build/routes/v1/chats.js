"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_1 = require("../../handlers/chat");
const chatRouter = (0, express_1.Router)();
const GptMethods = new chat_1.GptHandler();
chatRouter.post('/', GptMethods.chat);
exports.default = chatRouter;
