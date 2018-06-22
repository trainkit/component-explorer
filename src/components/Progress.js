
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Progress extends Component {
  constructor () {
    super()

    this.name = '@trainkit/progress'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}