
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Select extends Component {
  constructor () {
    super()

    this.name = '@trainkit/select'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}