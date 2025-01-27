// index.test.js
const request = require('supertest');
const app = require('./index');

describe('GET /todos', () => {
  it('should return a 200 OK response', async () => {
    const response = await request(app).get('/todos');
    expect(response.status).toBe(200);
  });
});