// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const generator = require('./generator')


// set handlebars.registerHelper
const Handlebars = require("handlebars")
Handlebars.registerHelper('ifEquals', function (a, b, options) {
  if (a == b) { return options.fn(this); }
  return options.inverse(this);
})

// setting template engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}))

app.set('view engine', '.hbs')

// setting bodyparser
app.use(bodyParser.urlencoded({ extended: true }))

// setting route 
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const career = req.body.career
  const sentence = generator(career)
  res.render('index', { sentence, career })
})

// strats the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})