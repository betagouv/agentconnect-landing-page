const express = require("express");
var favicon = require("serve-favicon");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const {
  offres_fi_test,
  offres_fi,
  offres_fs_agents,
} = require("./datas-offres");

const routes = [
  {
    path: "/",
    template: "index",
    data: { offres_fs_agents, title: "Agent - AgentConnect" },
  },
  {
    path: "/fi",
    template: "fi",
    data: {
      offres_fi_test,
      offres_fi,
      title: "Fournisseur d'Identité - AgentConnect",
    },
  },
  {
    path: "/fs",
    template: "fs",
    data: { title: "Fournisseur de Services - AgentConnect" },
  },
  {
    path: "/feuille-de-route",
    template: "feuille-de-route",
    data: { title: "Feuille de route - AgentConnect" },
  },
  { path: "/aide", template: "aide", data: { title: "Aide - AgentConnect" } },
  {
    path: "/plan-du-site",
    template: "plan-site",
    data: { title: "Plan du site - AgentConnect" },
  },
  {
    path: "/accessibilite",
    template: "accessibilite",
    data: { title: "Accessibilité - AgentConnect" },
  },
  {
    path: "/mentions-legales",
    template: "mentions-legales",
    data: { title: "Mentions Légales - AgentConnect" },
  },
  {
    path: "/cgu",
    template: "cgu",
    data: { title: "Conditions générales d'utilisation - AgentConnect" },
  },
  {
    path: "/stats",
    template: "stats",
    data: { title: "Statistiques - AgentConnect" },
  },
];

dotenv.config();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static("assets"));

// Définition des routes
routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    let data = route.data;
    data.url = req.url;
    res.render(route.template, data);
  });
});

app.use(express.static("public"));
app.use("/static", express.static("node_modules/@gouvfr/dsfr/dist"));

app.use(favicon(path.join(__dirname, "../public/favicon", "favicon.svg")));

app.listen(process.env.PORT, () => {
  console.log(`Vous êtes sur le port ${process.env.PORT}`);
});
