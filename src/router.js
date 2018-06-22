var layout = require('./layout')
var mainView = require('./views/main.view.js')

module.exports = router

function router (state, emit, app) {
  app.route('/', layout(mainView))
}
