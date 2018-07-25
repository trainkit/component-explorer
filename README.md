# Trainkit

Still a WIP!


## Usage

#### Tabs 

```js
var html = require('choo/html')
var Tabs = require('@trainkit/Tabs')

var tabs = [{ 
  name: 'View A', 
  view: state => html`<div>Content of view A</div>` 
}, { 
  name: 'View B', 
  view: state => html`<div>Content of view B</div>` 
}]

module.exports = view

function view () {
  return html`
    <div>
      <div class="tabs">
        ${ state.cache(Tabs, 'tabs').render(tabs) }
      </div>
      <div class="view">
        ${ state.cache(Tabs, 'tabs').selected.view(state, emit) }
      </div>
    </div`
}

```
