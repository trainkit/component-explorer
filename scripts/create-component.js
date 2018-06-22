var fs = require('fs')
var path = require('path')

var names = process.argv.slice(2)

names.forEach(name => {
  var capitalizedName = name[0].toUpperCase() + name.substring(1)
  var filepath = path.join(__dirname, '../components', capitalizedName + '.js')

  fs.writeFileSync(filepath, template(capitalizedName))
})

function template (capitalizedName) {
  var lowercase = capitalizedName.toLowerCase()

  return `
var html = require('choo/html')
var Component = require('choo/component')

module.exports = class ${capitalizedName} extends Component {
  constructor () {
    super()

    this.name = '@trainkit/${lowercase}'
  }

  createElement () {
    return html\`<div></div>\`
  }

  update () {
    return true
  }
}`
}
