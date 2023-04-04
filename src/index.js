const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static('assets'));

app.use("/reby", express.static('node_modules/@gouvfr/dsfr/dist'));

app.listen(port, () => {
  console.log(`Vous êtes sur le port ${port}`)
})
