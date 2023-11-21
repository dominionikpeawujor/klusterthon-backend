import { Router } from 'express';
import { GptHandler } from '../../handlers/chat';

const chat = Router();
const GptMethods = new GptHandler();

chat.post('/', GptMethods.chat);

export default chat;
