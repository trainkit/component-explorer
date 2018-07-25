var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Icon extends Component {
  constructor () {
    super()

    this.name = '@trainkit/icon'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}
