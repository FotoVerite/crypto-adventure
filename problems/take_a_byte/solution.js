var result = 0

for (var i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i])
  var str = Buffer(process.argv[i]).toJSON().toString();
  console.log(str)
}

return false

