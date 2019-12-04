const exec = require('child_process').execSync

const findFiles = term => exec(`grep -r ${term} .`).toString()

exports.ls = argv => {
  const searchTerm = argv[2]
  if (!searchTerm) throw 'No search term parameter!'
  console.log(findFiles(searchTerm))
  return argv
}
