// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');

// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// Je spécifie le dossier contenant les views (les fichiers .ejs)
// pour le paramètre "views" de mon serveur, je place la valeur "./app/views"
app.set('views', './app/views');
// Ajout du moteur de templace
app.set('view engine', 'ejs');

const expressSession = require('express-session');

app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: "Guess it!",
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
