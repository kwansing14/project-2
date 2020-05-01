/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
    let postRegister = (request, callback) => {
        let registerQuery = "INSERT INTO users (name, password) VALUES ($1, $2) returning *";
        // console.log("MODEL >>>"+username)
        // console.log("MODEL >>>"+hashedpassword)
        let values = request;
        //console.log("request>>>"+request)
        console.log(values)
        dbPoolInstance.query(registerQuery, values, (error, result)=>{
            if(error){
                callback(error, null);
            }else{
                if( result.rows.length > 0 ){
                    console.log(result)
                    callback(null, result.rows);
                }else{
                    callback(null, null);
                }
            }

        })
    }

    let postLogin = (request, callback) => {
        let getUserQuery = "SELECT * FROM users WHERE name=$1";
        let values = request;
        dbPoolInstance.query(getUserQuery, values, (error, result)=>{
            if(error){
                callback(error, null);
            }else{
                if( result.rows.length > 0 ){
                    callback(null, result.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    let postSetupdb = (request, callback) => {
        let query = "INSERT INTO profile (game_id, name, level, server, bio, user_id) VALUES ($1, $2, $3, $4, $5, $6) ";
        let values = request;
        dbPoolInstance.query(query, values, (error, results) => {
             if(error){
                callback(error, null);
            }else{
                if(results.rows.length > 0 ){
                    console.log(result.rows)
                    callback(null, results.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    let getProfile = (request, callback) => {
        let values = request;
        let query = "SELECT profile.id, profile.name, level, server, bio, user_id, game.name AS gamename FROM profile INNER JOIN game ON (game_id = game.id) where user_id = $1";
        dbPoolInstance.query(query, values, (error, result)=>{
            if(error){
                callback(error, null);
            }else{
                if( result.rows.length > 0 ){
                    console.log(result.rows)
                    callback(null, result.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    let allProfile = (callback) => {
        let query = "SELECT profile.id, profile.name, level, server, bio, user_id, game.name AS gamename FROM profile INNER JOIN game ON (game_id = game.id)";
        dbPoolInstance.query(query, (error, result)=>{
            if(error){
                callback(error, null);
            }else{
                if( result.rows.length > 0 ){
                    console.log(result.rows)
                    callback(null, result.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    let deleteProfiledb = (request, callback) => {
        let query = "DELETE from profile where id = $1";
        let values = request;
        dbPoolInstance.query(query, values, (error, result)=>{
            if(error){
                callback(error, null);
            }else{
                if( result.rows.length > 0 ){
                    //console.log(result.rows)
                    callback(null, result.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    return {
        postRegister:postRegister,
        postLogin:postLogin,
        postSetupdb,
        getProfile,
        deleteProfiledb,
        allProfile
    };
};