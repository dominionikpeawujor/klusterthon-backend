import { Request, Response } from 'express';
import { GptService } from '../services';

const chatService = new GptService();

export class GptHandler {
  async chat(req: Request, res: Response) {
  }
}
