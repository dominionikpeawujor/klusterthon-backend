import { config } from 'dotenv';
// import OpenAIApi from 'openai';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { LLMChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';

config();

const model = new ChatOpenAI({
  temperature: 0.9,
  openAIApiKey: process.env.API_KEY, // In Node.js defaults to process.env.OPENAI_API_KEY
});

export default class Langchain {
  async diagnose(message: string) {
    const input1 =
      'As a medical professional with 30 years experience working as a doctor, what are possible diagnosis from this symptoms? If the input is not medical related, inform the user that you are a medical bot and cannot process their request: {input}?';
    const prompt = PromptTemplate.fromTemplate(input1);

    const chain = new LLMChain({ llm: model, prompt });
    
    const feed = await chain.call({ input: message });

    return feed;
  }
}
