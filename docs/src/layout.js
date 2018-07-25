var html = require('choo/html')
var menu = require('./views/menu.view')

const REPO_URL = 'https://github.com/trainkit/trainkit'

module.exports = layout

function layout (view) {
  return (state, emit) => html`
    <body class="flex flex-column">
      <main id="wrapper" class="flex-auto columns">
        <aside class="section column is-2">
          <div class="container">
            ${menu(state, emit)}
          </div>
        </aside>

        <section class="section column flex flex-column min-vh-100 pb0">
          <div class="container flex-auto">
            ${view(state, emit)}
          </div>

          <footer class="footer bg-white">
            <div class="content has-text-centered">
              <p>
                Made with ❤️ in Montréal. Check out the code on 
                <a href=${REPO_URL}><strong>Github</strong></a>.
              </p>
            </div>
          </footer>
        </section>
      </main>
    </body>`
}
