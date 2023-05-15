const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.use(favicon(path.join(__dirname, 'public', 'favicon.svg')))
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static('assets'));

app.use("/static", express.static('node_modules/@gouvfr/dsfr/dist'));

app.listen(process.env.PORT, () => {
  console.log(`Vous êtes sur le port ${process.env.PORT}`)
})
