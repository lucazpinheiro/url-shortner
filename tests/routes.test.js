const request = require('supertest')
const app = require('../src/app')

describe('Routes', () => {
  it('should create new short url', async () => {
    const res = await request(app)
      .post('/')
      .send({
        url: 'www.xyz.com',
        date: 'month-day-year'
      })
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('msg')
  })

  it('should receive a response', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('msg')
  })
})
