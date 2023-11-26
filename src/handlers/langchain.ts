import { Request, Response } from 'express';
import {  LangchainService } from '../services';

const langchainService = new LangchainService();

export class LangchainHandler {
  async diagnose(req: Request, res: Response) {
    try {
      const data: string = req.body.message;
      const response = await langchainService.diagnose(data);
      return res.status(200).json({ message: 'success', data: response });
    } catch (error) {
      console.error(`Error at LangchainHandler: ${error}`);
      return res
        .status(500)
        .json({ message: 'error', error: (error as unknown as Error).message });
    }
  }
}
