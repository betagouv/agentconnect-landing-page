const express = require('express')
var favicon = require('serve-favicon')
const path = require('path')
const dotenv = require('dotenv')
const app = express()
const { offres_fi_test, offres_fi, offres_fs_agents } = require("./datas-offres")

const routes = [
  { path: '/', template: 'index', data: {offres_fs_agents} },
  { path: '/fi', template: 'fi', data: { offres_fi_test, offres_fi } },
  { path: '/fs', template: 'fs', data: {offres_fs_agents} },
  { path: '/route', template: 'route' },
  { path: '/aide', template: 'aide' }
];

dotenv.config()

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static('assets'));

// Définition des routes
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    res.render(route.template, route.data);
  });
});

app.use(express.static('public'));
app.use("/static", express.static('node_modules/@gouvfr/dsfr/dist'));

app.use(favicon(path.join(__dirname, '../public', 'favicon.svg')))

app.listen(process.env.PORT, () => {
  console.log(`Vous êtes sur le port ${process.env.PORT}`)
})
