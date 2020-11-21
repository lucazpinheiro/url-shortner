const mongoose = require('mongoose')

const urlDataSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: true
  },
  shortURL: {
    type: String,
    required: true
  },
  creationDate: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true
  },
  successfulRedirects: {
    type: Number,
    required: true
  },
  failedRedirects: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

mongoose.model('urlModel', urlDataSchema)
