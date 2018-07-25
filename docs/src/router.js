var layout = require('./layout')

module.exports = router

function router (state, emit, app) {
  app.route('/', layout(require('./views/home.view')))
  app.route('/tabs', layout(require('./views/tabs.view')))
}
