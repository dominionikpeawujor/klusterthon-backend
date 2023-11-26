import { Router } from 'express';
import { LangchainHandler } from '../../handlers/langchain';

const diagnose = Router();
const LangchainMethods = new LangchainHandler();

diagnose.post('/', LangchainMethods.diagnose);

export default diagnose;
