var html = require('choo/html')

module.exports = layout

function layout (view) {
  return (state, emit) => html`
    <body>
      <nav></nav>
      <header></header>
      ${view(state, emit)}
      <footer></footer>
    </body>`
}
