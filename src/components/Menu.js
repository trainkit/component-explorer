
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Menu extends Component {
  constructor () {
    super()

    this.name = '@trainkit/menu'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}