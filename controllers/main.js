module.exports = (db) => {
    /**
    * ===========================================
    * Controller logic
    * ===========================================
    **/
    let homepage = (request, response) => {
        response.render('main/homepage')
    }
    let index = (request, response) => {
        console.log(request.body)
        let username = request.cookies['username']
        let profileid = request.cookies['profileid']
        response.cookie('profileid',request.params.id)
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        let values = [request.params.id, request.params.gameid]
        //console.log(values)
        db.users.allProfile(values, (error, results) => {
            //console.log(results)

            //nesting match checking here
            let values = [profileid] //user is 10
            let data = {};
            db.index.checkMatch(values, (error,matchResults) => {

            let data = {
                username,
                loggedIn,
                results,
                matchResults
            }

            //shuffle the array
            function shuffle(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            if(data.results != null) {
                shuffle(data.results)
                //only show the first 10 arrays
                if (data.results.length>10) {
                    let tempArray = [];
                    for(let i=0; i<10; i++){
                        tempArray.push(data.results[i])
                    }
                    data.results = tempArray;
                }
            }
            response.render('main/index',data)
            });

        });
    };

    let matched = (request, response) => {
        //console.log(request.body.id)
        let profileid = request.cookies['profileid']
        console.log(profileid)
        let values = [profileid, request.body.id]
        db.index.matcheddb(values, (error,results) => {
        })
    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    matched,
    homepage
  };
}