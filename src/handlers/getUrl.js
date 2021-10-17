module.exports = (req, res) => {
  res.json({
    msg: 'hello world',
    params: req.params
  })
}
