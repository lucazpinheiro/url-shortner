const crc32 = require('crc32')

/**
 * @param {string} str
 * @returns {string}
 */
module.exports = (str) => {
  return crc32(str.toLowerCase())
}
