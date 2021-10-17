module.exports = (req, res) => {
  console.log(req.params)
  res.json({
    msg: 'hello world',
    params: req.params
  })
}
