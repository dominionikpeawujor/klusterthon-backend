import OpenAI from 'openai';
import { config } from 'dotenv';

config();

// Initial config for chatGPT
const secret: string = process.env.API_KEY as unknown as string;
const openai = new OpenAI({ apiKey: secret });

/* The function that connects chatgpt operations and
 * handles the response to be sent back to the user.
 */

export default class Gpt {
  async chat(data: string): Promise<string> {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: data }],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message['content'] as string;
  }
}
