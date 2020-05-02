module.exports = (db) => {
    /**
    * ===========================================
    * Controller logic
    * ===========================================
    **/

    let index = (request, response) => {
        let username = request.cookies['username']
        let userid = request.cookies['userid']
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        db.users.allProfile((error, results) => {
            //console.log(results)

            //nesting match checking here
            let values = [userid] //user is 10
            var matchedid2 = [];
            let data = {};

            db.index.checkMatch(values, (error,matchResults) => {

            let data = {
                username,
                loggedIn,
                results,
                matchResults
            }

            //shuffle the arrayl
            function shuffle(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

            shuffle(data.results)

            //only show the first 10 arrays
            if (data.results.length>10) {
                let tempArray = [];
                for(let i=0; i<10; i++){
                    tempArray.push(data.results[i])
                }
                data.results = tempArray;
            }
            // //response.send(data)



            response.render('main/index',data)
            });

        });
    };

    let matched = (request, response) => {
        //console.log(request.body.id)
        let userid = request.cookies['userid']
        let values = [userid, request.body.id]
        db.index.matcheddb(values, (error,results) => {
        })
    }

    let checkMatch = (request, response) => {
        let userid = request.cookies['userid']
        let values = [userid] //user is 10
        var matchedid2 = [];
        let data = {};

        db.index.checkMatcheddb3rdtry(values, (error,results) => {

            response.send(results)
        });
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    matched,
    checkMatch
  };
}