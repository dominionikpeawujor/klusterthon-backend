import { Request, Response } from 'express';
import { GptService } from '../services';

const chatService = new GptService();

export class GptHandler {
  async chat(req: Request, res: Response) {
    try {
      const data: string = req.body;
      const response = await chatService.chat(data);
      return res.status(200).json({ message: 'success', data: response });
    } catch (error) {
      new Error(`Error at GPTHandler: ${error}`);
    }
  }
}
