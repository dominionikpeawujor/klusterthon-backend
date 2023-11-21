"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../src/server"));
const request = (0, supertest_1.default)(server_1.default);
describe('Chat System with Chat GPT', () => {
    it('should return a message', async (done) => {
        const response = await request
            .post('/api/chat')
            .send('hello');
        expect(response.status).toBe(200);
    });
});
