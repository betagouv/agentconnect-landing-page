const express = require('express')
var favicon = require('serve-favicon')
const path = require('path')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index')
})

app.use("/static", express.static('node_modules/@gouvfr/dsfr/dist'));

app.use(favicon(path.join(__dirname, 'public', 'favicon.svg')))

app.listen(process.env.PORT, () => {
  console.log(`Vous êtes sur le port ${process.env.PORT}`)
})
