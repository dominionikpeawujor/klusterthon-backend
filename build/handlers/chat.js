"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GptHandler = void 0;
const services_1 = require("../services");
const chatService = new services_1.GptService();
class GptHandler {
    async chat(req, res) {
        try {
            const data = req.body;
            const response = await chatService.chat(data);
            return res.status(200).json({ message: 'success', data: response });
        }
        catch (error) {
            new Error(`Error at GPTHandler: ${error}`);
        }
    }
}
exports.GptHandler = GptHandler;
