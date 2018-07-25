var html = require('choo/html')
var { Tabs } = require('../components')

var tabs = [
  { name: 'View A', view: state => html`<div>Content of view A</div>` },
  { name: 'View B', view: state => html`<div>Content of view B</div>` }
]

var usage = `
  var tabs = [
    { name: 'View A', view: state => html\`<div>Content of view A</div>\` },
    { name: 'View B', view: state => html\`<div>Content of view B</div>\` }
  ]

  return html\`
    <div class="tabs">
      \${state.cache(Tabs, 'tabs').render(tabs)}
    </div>
    <div class="view">
      \${state.cache(Tabs, 'tabs').selected.view(state, emit)}
    </div>
  \`
`

module.exports = tabsView

function tabsView (state, emit) {
  return html`
    <article>
      <h2>Tabs</h2>
      
      <h3>Usage</h3>

      <pre><code>${usage}</code></pre>

      <h3>Example</h3>

      ${state.cache(Tabs, 'tabs').render(tabs)}
      ${state.cache(Tabs, 'tabs').selected.view(state, emit)}
    </article>`
}
