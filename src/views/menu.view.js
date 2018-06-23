var html = require('choo/html')

var components = [{ name: 'component name' }]

module.exports = menu

function menu (state, emit) {
  return html`
    <aside class='bg-black ph4 pv3 w5'>
      <nav>
        <ul class='list mt0 pl0'>
          ${components.map(item)}
        </ul>
      </nav>
    </aside>`
}

function item (component) {
  return html`
    <li>
      <a href='/${component.name.toLowerCase()}' class='link white'>
        ${component.name}
      </a>
    </li>`
}
