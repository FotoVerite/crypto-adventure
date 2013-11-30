var bytes = require('utf8-bytes');
var result = 0

for (var i = 2; i < process.argv.length; i++) {
  var byteArray = bytes(process.argv[i])
  var hexArray = [];
  console.log(Buffer(byteArray).toString("hex"))
  console.log(Buffer(byteArray).toString('base64'))
  console.log(Buffer(byteArray).toString())
}


