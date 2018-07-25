var html = require('choo/html')
var menu = require('./views/menu.view')

const REPO = 'https://github.com/trainkit/component-explorer'

module.exports = layout

function layout (view) {
  return (state, emit) => html`
    <body class="flex flex-column">
      <nav class="flex h3 bg-black white pv3 ph4">
        <h1 class="ma0">@trainkit/component-explorer</h1>
      </nav>

      <main class="flex flex-row flex-auto">
        ${menu(state, emit)}

        <div class="ph4 pv3">
          ${view(state, emit)}
        </div>
      </main>

      <footer class="flex items-center justify-center bg-black white h3">
        <small>
          Made with ❤️ in Montréal. Check out the code on 
          <a class="link white" href=${REPO}>
            <strong>Github</strong>
          </a>.
        </small>
      </footer>
    </body>`
}
