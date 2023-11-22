import supertest from 'supertest';
import app from '../server'

const request = supertest(app);
const data  = {
    message: 'hello'
}

describe('Chat System with Chat GPT', () => {
  it('should return a message', async () => {
    const response = await request.post('/api/chat').send(data);
    expect(response.status).toBe(200);
  });
});
