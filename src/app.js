const express = require('express')
const handlers = require('./handlers')

const app = express()
const port = process.env.PORT || 3000

// setting json parser middleware
app.use(express.json())

// setting up GET and POST route
app.get('/:urlHash', handlers.getUrl)

app.post('/newUrl', handlers.postUrl)

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is up on http://localhost:${port}; press Ctrl-c to terminate`)
  })
} else {
  module.exports = app
}
