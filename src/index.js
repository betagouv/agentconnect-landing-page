const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static('assets'));

app.use("/static", express.static('node_modules/@gouvfr/dsfr/dist'));

app.listen(process.env.PORT, () => {
  console.log(`Vous êtes sur le port ${process.env.PORT}`)
})
