const dataMapper = require("../datamapper");


const category = async (request,response,next) =>  {

response.locals.gentils = await dataMapper.getgentil();

response.locals.méchants = await dataMapper.getméchant();

response.locals.animals = await dataMapper.getanimal();

next();

};

module.exports= category;
