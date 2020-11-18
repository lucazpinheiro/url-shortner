const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json({ msg: 'ok' })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.post('/', async (req, res) => {
  try {
    res.status(200).json({ msg: 'ok' })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router
