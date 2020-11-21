
function requestLogger (req, res, next) {
  console.log(`request logged: ${req.method} ${req.path}`)
  next()
}

module.exports = requestLogger
