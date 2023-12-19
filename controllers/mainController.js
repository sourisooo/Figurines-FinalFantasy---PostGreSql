const path = require('path');
const dataMapper = require('../datamapper');

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (request, response) => {
    
   const figurines = await dataMapper.getAllFIgurines();


    response.render('accueil', {figurines})

  },

  // méthode pour la page article
  articlePage: async (request, response) => {


    const {id} = request.params;

    const figurine = await dataMapper.getFigurine(id);
    
    const reviews = await dataMapper.getreviews(id);

    // console.log(id, figurine,reviews);

      response.render('article', {figurine,reviews})

  },

    displayCategory: async (request, response) => {

 
    const {category} = request.params;

    // console.log(category);

    const figurines = await dataMapper.getcategory(category);

    // console.log(figurines);

    response.render('accueil',{figurines})

  }

};


module.exports = mainController;
