
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Alert extends Component {
  constructor () {
    super()

    this.name = '@trainkit/alert'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}