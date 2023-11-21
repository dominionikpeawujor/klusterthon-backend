"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Initial config for chatGPT
const secret = process.env.API_KEY;
const openai = new openai_1.default({ apiKey: secret });
/* The function that connects chatgpt operations and
 * handles the response to be sent back to the user.
 */
class Gpt {
    async chat(data) {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: data }],
            model: 'gpt-3.5-turbo',
        });
        return (completion.choices[0]);
    }
}
exports.default = Gpt;
