
function requestLogger (req, res, next) {
  console.log(`Request logged: ${req.method} ${req.path}`)
  next()
}

module.exports = requestLogger
