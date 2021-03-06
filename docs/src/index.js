var choo = require('choo')
var router = require('./router')
var css = require('sheetify')

var app = choo()

css('tachyons')

app.use(router)

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.mount('body')
