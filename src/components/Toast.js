
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Toast extends Component {
  constructor () {
    super()

    this.name = '@trainkit/toast'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}