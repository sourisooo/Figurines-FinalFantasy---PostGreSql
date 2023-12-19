const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');
const category = require('./middleware/category');


const router = express.Router();

// page d'accueil
router.get('/', category, mainController.homePage);

// page article
router.get('/article/:id', category, mainController.articlePage);

router.get('/category/:category', category, mainController.displayCategory)

// page favoris
router.get('/bookmarks', category, bookmarksController.bookmarksPage );

router.get('/bookmarks/add/:id', category, bookmarksController.addfav );

router.get('/bookmarks/remove/:id', category, bookmarksController.removefav );




// on exporte le router 
module.exports = router;
