import { Router } from 'express';
import { GptHandler } from '../../handlers/gpt';

const chat = Router();
const GptMethods = new GptHandler();

chat.post('/', GptMethods.chat);

export default chat;
