const path      = require('path')
var song = require("../../data/songs")[0].split('\n')

module.exports = function () {
  return { args: song}
}