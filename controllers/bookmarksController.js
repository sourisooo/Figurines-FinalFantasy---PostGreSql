const path = require('path');
const dataMapper = require('../datamapper');
let favs = [];
let favssession = [];

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
 
    console.log(favssession);

    response.render("favoris",{favssession});

  },

  async addfav (request, response){

    const {id} = request.params;

    const newfav = await dataMapper.getFigurine(id);

    favs.push(newfav);

    request.session.bookmarks = favs;

    favssession = request.session.bookmarks;

    console.log(favssession);

    response.redirect("/bookmarks");


  },


  async removefav (request, response){

    console.log("remove");

    const {id} = request.params;

    console.log(id);

    const newfav = await dataMapper.getFigurine(id);

    const favsfilter = favs.filter(e => e.id !== parseInt(id));

    // console.log(favsfilter);

    favs = favsfilter;

    request.session.bookmarks = favsfilter;

    favssession = request.session.bookmarks;

    console.log(favssession);

    response.redirect("/bookmarks");



  }

};


module.exports = bookmarksController;
