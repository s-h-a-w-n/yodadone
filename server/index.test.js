const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world! Hmm.');
});

describe('GET /', () => {
  it('should return Hello, world! Hmm.', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, world! Hmm.');
  });
});
