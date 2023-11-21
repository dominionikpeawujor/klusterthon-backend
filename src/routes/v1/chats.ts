import { Router } from "express";
import { GptHandler } from "../../handlers/chat"; 

const chatRouter = Router();
const GptMethods = new GptHandler()

chatRouter.get('/', GptMethods.chat);

export default chatRouter;