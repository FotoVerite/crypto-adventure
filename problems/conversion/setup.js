const path      = require('path')
var song = require("../../data/songs")[1].split('\n')

module.exports = function () {
  return { args: song}
}