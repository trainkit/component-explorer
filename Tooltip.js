
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Tooltip extends Component {
  constructor () {
    super()

    this.name = '@trainkit/tooltip'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}