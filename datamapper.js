const client = require('./database');

const dataMapper = {

   async getAllFIgurines(){

    const sqlQuery = `
    SELECT *
    FROM figurine

    `;



    // la variable result va contenir ce que retourne la méthode
    let result;
    try{
        response = await client.query(sqlQuery);

        result = response.rows;
    }
    catch(error){
        console.error("ERROR :",error);
    }

    // si tout se passe bien, result va contenir la liste des étudiants
    // s'il y a une erreur, result sera null
    return result;


    },


    async getFigurine(id){

        const sqlQuery = `
        SELECT *
        FROM figurine
        WHERE id=${id};
        `;


        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows[0];
            // console.log(result);
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;




    },


    async getreviews (id){

        const sqlQuery = `
        SELECT *
        FROM review
        WHERE figurine_id=${id};
        `;



        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows;
            // console.log(result);
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;

    },

    async getcategory(category) {

        const sqlQuery = `
        SELECT *
        FROM figurine
        WHERE category= '${category}';
        `;


        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows;
            console.log(result);
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;



    },

    async getgentil(){

        const sqlQuery = `
        SELECT *
        FROM figurine
        WHERE category= 'Gentil';
        `;


        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows;
            console.log(result);
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;




    }, 

    async getméchant(){

        const sqlQuery = `
        SELECT *
        FROM figurine
        WHERE category= 'Méchant';
        `;


        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows;
            console.log(result);
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;




    }, 


    async getanimal(){

        const sqlQuery = `
        SELECT *
        FROM figurine
        WHERE category= 'Animal';
        `;


        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows;
            console.log(result);
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;




    }


};

module.exports = dataMapper;
