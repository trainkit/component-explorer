var html = require('choo/html')

var components = [{ name: 'Tabs' }]

module.exports = menu

function menu (state, emit) {
  return html`
    <nav>
      <p class="title"><a href="/">Trainkit</a></p>
      <h2 class="title is-5">Components</h2>
      <ul class='list mt0 pl0'>
        ${components.map(item)}
      </ul>

    </nav>`
}

function item (component) {
  return html`
    <li>
      <a href="/${component.name.toLowerCase()}">
        ${component.name}
      </a>
    </li>`
}
