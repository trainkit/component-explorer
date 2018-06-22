
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Tabs extends Component {
  constructor () {
    super()

    this.name = '@trainkit/tabs'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}