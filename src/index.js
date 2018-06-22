var choo = require('choo')
var router = require('./router')

var app = choo()

app.use(router)

app.mount('body')
