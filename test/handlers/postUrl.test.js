const handlers = require('../../src/handlers')

describe('[POST handler]', () => {
  describe('creating a short url', () => {
    it('should send a json with the new url', () => {
      const req = {
        body: {
          targetUrl: 'www.github.com'
        }
      }
      const res = { json: jest.fn() }

      handlers.postUrl(req, res)
      expect(res.json.mock.calls[0][0]).toEqual({
        newUrl: 'http://localhost:3000/2d191c8c'
      })
    })

    it('should send a json with the url already saved', () => {
      jest.mock('../../src/db', () => ({
        '2d191c8c': {
          originalUrl: 'www.github.com',
          newUrl: 'http://localhost:3000/2d191c8c'
        }
      }))

      const req = {
        body: {
          targetUrl: 'www.github.com'
        }
      }
      const res = { json: jest.fn() }

      handlers.postUrl(req, res)
      expect(res.json.mock.calls[0][0]).toEqual({
        newUrl: 'http://localhost:3000/2d191c8c'
      })
    })
  })
})
