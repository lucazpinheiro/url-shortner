const handlers = require('../../src/handlers')

describe('[GET handler]', () => {
  describe('accessing a previous shorted url', () => {
    it('should redirect to original url', () => {
      const req = {
        params: {
          urlHash: 'abc123'
        }
      }
      const res = {
        json: jest.fn()
      }

      handlers.getUrl(req, res)
      expect(res.json.mock.calls[0][0]).toEqual({
        msg: 'hello world',
        params: {
          urlHash: 'abc123'
        }
      })
    })
  })
})
