import { Router } from "express";
import { GptHandler } from "../../handlers/chat"; 

const chatRouter = Router();
const GptMethods = new GptHandler()

chatRouter.post('/', GptMethods.chat);

export default chatRouter;