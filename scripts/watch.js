var budo = require('budo')
var sheetify = require('sheetify')

const PORT = 8080

budo('docs/src/index.js:bundle.js', {
  live: true,
  pushstate: true,
  port: PORT,
  dir: 'docs/public',
  browserify: {
    transform: sheetify
  }
}).on('connect', e => {
  console.log('listening on port', PORT)
})
