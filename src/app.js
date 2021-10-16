const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// setting json parser middleware
app.use(express.json())

// setting up basic GET route
app.get('/', (req, res) => {
  res.json({
    msg: 'hello world'
  })
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is up on http://localhost:${port}: press Ctrl-c to terminate`)
  })
} else {
  module.exports = app
}
