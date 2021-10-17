module.exports = (req, res) => {
  // console.log(req.body)
  const { targetUrl } = req.body
  res.json({
    msg: 'new url created',
    targetUrl
  })
}
