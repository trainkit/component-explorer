var html = require('choo/html')

module.exports = home

function home () {
  return html`
    <article>
      <p>
        Trainkit is a set of crude web components that can be used with the Choo framework.
      </p>
    </article>`
}
