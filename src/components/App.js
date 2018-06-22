
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class App extends Component {
  constructor () {
    super()

    this.name = '@trainkit/app'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}