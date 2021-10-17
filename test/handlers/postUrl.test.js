const handlers = require('../../src/handlers')

describe('[POST handler]', () => {
  describe('creating a short url', () => {
    it('should create a hash string for a given url', () => {
      const req = {
        body: {
          targetUrl: 'www.github.com'
        }
      }
      const res = { json: jest.fn() }

      handlers.postUrl(req, res)
      expect(res.json.mock.calls[0][0]).toEqual({
        msg: 'new url created',
        targetUrl: 'www.github.com'
      })
    })
  })
})
