import supertest from 'supertest';
import app from '../../src/server';

const request = supertest(app);

describe('Chat System with Chat GPT', () => {
  it('should return a message', async (done) => {
    const response = await request
    .post('/api/chat')
    .send('hello');
    expect(response.status).toBe(200);
  });
});
