const mongoose = require('mongoose')

const DB_CREDENTIALS = process.env.DATABASE_URL || 'mongodb://localhost/urlshortner'

module.exports = () => {
  mongoose.connect(DB_CREDENTIALS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = mongoose.connection
  db.on('error', (err) => console.error(err))
  db.once('open', () => console.log('Connected to Database'))
}
