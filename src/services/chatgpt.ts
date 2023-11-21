import OpenAI from 'openai';
import { config } from 'dotenv';

config();

const secret: string = process.env.secret as unknown as string;
const openai = new OpenAI({ apiKey: secret });

export async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: 'hello chatgpt' },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log('testststs', completion.choices[0]);
}
main();

// { role: 'system', content: 'You are a helpful assistant.' },
//       { role: 'user', content: 'Who won the world series in 2020?' },