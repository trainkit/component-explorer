
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Modal extends Component {
  constructor () {
    super()

    this.name = '@trainkit/modal'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}