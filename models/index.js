/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
    let index = (callback) => {
        let query = 'SELECT tweets.id,name,content,user_id FROM users INNER JOIN tweets on (user_id = users.id) ORDER BY id DESC';
        dbPoolInstance.query(query, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    console.log("Success in getting all tweets")
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    };

    let matcheddb = (request, callback) => {
        let values = request;
        let query = 'insert into user_match (user1_id, user2_id) values($1, $2) returning *';
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if(error){
                callback(error, null);
            }else{
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    };

    let checkMatcheddb = (callback) => {
        //let values = request;
        let query = 'select distinct (user1_id) from user_match'
        dbPoolInstance.query(query, (error, results) => {
             if(error){
                callback(error, null);
            }else{
                if(results.rows.length > 0 ){

                    callback(null, results.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    let checkMatcheddb1 = (request, callback) => {
        let values = request;
        let query = 'select user2_id from user_match where user1_id = $1'
        dbPoolInstance.query(query, values, (error, results) => {
             if(error){
                callback(error, null);
            }else{
                if(results.rows.length > 0 ){

                    callback(null, results.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    let checkMatcheddb2 = (request, callback) => {
        let values = request;
        let query = 'select user2_id from user_match where user1_id = $1'
        dbPoolInstance.query(query, values, (error, results) => {
             if(error){
                callback(error, null);
            }else{
                if(results.rows.length > 0 ){
                    callback(null, results.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }

    let checkMatcheddb3rdtry = (request, callback) => {
        let values = request;
        let query = 'select * from user_match where user1_id IN(select user2_id from user_match where user1_id = $1);'
        dbPoolInstance.query(query, values, (error, results) => {
             if(error){
                callback(error, null);
            }else{
                if(results.rows.length > 0 ){
                    callback(null, results.rows);
                }else{
                    callback(null, null);
                }
            }
        })
    }
    return {
        index,
        matcheddb,
        checkMatcheddb,
        checkMatcheddb1,
        checkMatcheddb2,
        checkMatcheddb3rdtry
    };
};