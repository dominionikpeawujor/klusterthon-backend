"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GptHandler = void 0;
const services_1 = require("../services");
const chatService = new services_1.GptService();
class GptHandler {
    async chat(req, res) {
        try {
            const data = req.body.message;
            console.log(data);
            const response = await chatService.chat(data);
            return res.status(200).json({ message: 'success', data: response });
        }
        catch (error) {
            console.error(`Error at GPTHandler: ${error}`);
            return res.status(500).json({ message: 'error', error: (error.message) });
        }
    }
}
exports.GptHandler = GptHandler;
