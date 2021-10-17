const { hash } = require('../lib')
const getDb = require('../db')

const SAVED_URLS = getDb()

module.exports = (req, res) => {
  const { targetUrl } = req.body
  const targetHash = hash(targetUrl)

  if (SAVED_URLS[targetHash]) {
    res.json({
      newUrl: SAVED_URLS[targetHash].newUrl
    })
    return
  }

  SAVED_URLS[targetHash] = {
    originalUrl: targetUrl,
    newUrl: `http://localhost:3000/${targetHash}`
  }

  res.json({
    newUrl: SAVED_URLS[targetHash].newUrl
  })
}
