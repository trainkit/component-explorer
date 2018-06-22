
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class DataTable extends Component {
  constructor () {
    super()

    this.name = '@trainkit/datatable'
  }

  createElement () {
    return html`<div></div>`
  }

  update () {
    return true
  }
}