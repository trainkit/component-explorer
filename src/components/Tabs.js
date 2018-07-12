var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Tabs extends Component {
  constructor (id, state, emit) {
    super()

    this.name = '@trainkit/tabs'

    this.id = id
    this.state = state
    this.emit = emit

    this.select = this.select.bind(this)
    this.tabEl = this.tabEl.bind(this)
  }

  createElement (items) {
    if (!this.items) {
      this.items = items
      this.selected = items[0]
    }

    return html`
      <ul class="tabs list pl0">
        ${this.items.map(this.tabEl)}
      </ul>`
  }

  update () {
    return false
  }

  select (item) {
    this.selected = item

    this.rerender()
    this.emit('render', this.name)
  }

  tabEl (item) {
    var selected = item === this.selected

    return html`
      <li class="tab dib ${selected ? 'bt bw1' : ''}">
        <button class="bw0 pointer" onclick=${e => this.select(item)}>
          ${item.name}
        </button>
      </li>`
  }
}
