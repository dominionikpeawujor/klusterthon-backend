import { Request, Response } from 'express';
import { GptService } from '../services';

const gptService = new GptService();

export class GptHandler {
  async chat(req: Request, res: Response) {
    try {
      const data: string = req.body.message;
      const response = await gptService.chat(data);
      return res.status(200).json({ message: 'success', data: response });
    } catch (error) {
      console.error(`Error at GPTHandler: ${error}`);
      return res
        .status(500)
        .json({ message: 'error', error: (error as unknown as Error).message });
    }
  }
}
