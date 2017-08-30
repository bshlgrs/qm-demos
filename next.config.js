// yarn add glob
const glob = require('glob')

exports.exportPathMap = () => {
  const pathMap = {}
  glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
    const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
    pathMap[path] = { page: path }
  })

  delete pathMap['victory-test'];
  console.log("making exportPathMap. Pathmap is ", pathMap)
  return pathMap;
}
