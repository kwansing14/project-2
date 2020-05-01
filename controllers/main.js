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
            console.log(results)

            //nesting match checking here
            let values = [userid] //user is 10
            var matchedid2 = [];
            let data = {};
            db.index.checkMatcheddb3rdtry(values, (error,matchResults) => {
                let matchedindex = 0;
                let matcheduser = 0;

                matchResults.forEach ((element,index) => { //results show 10 only have 5 ppl likes
                    if(element.user2_id == userid) { // loop the 5 ppl and check if any of them likes id = 10
                        matchedindex = index
                        matcheduser = element.user1_id
                        console.log("===WE FOUND A MATCH!!!!===")
                    } else {
                        console.log("====No matches found====")
                    }
                    console.log(element)
                    console.log("index = "+index)
                })
                console.log("and the number is~~~~"+matchedindex)
                console.log("you are matched with~~"+matcheduser)
                data = {
                    matchedindex,
                    matcheduser,
                    results,
                    username,
                    loggedIn
                }
                response.render('main/index',data)
            });
        });
    };

    let matched = (request, response) => {
        console.log(request.body.id)
        let userid = request.cookies['userid']
        let values = [userid, request.body.id]
        db.index.matcheddb(values, (error,results) => {
        })
    }

    // let checkMatch = (request, response) => {
    //     // console.log(request.body.id)
    //     let userid = request.cookies['userid']
    //     let values = [userid]
    //     var matchedid2 = [];
    //     let data = {};
    //     console.log(values)
    //     db.index.checkMatcheddb1(values, (error,results) => {

    //         for (i=0; i<results.length; i++){
    //             let values2 = [results[i].user2_id]
    //             console.log(values2)

    //             db.index.checkMatcheddb2(values2, (error,results2) => {

    //                 console.log(values2+"<>"+results2)
    //                 if (results2 != null) {

    //                     for (k=0; k<results2.length; k++) {
    //                         console.log("results2=="+results2[k].user2_id)

    //                         if (results2[k].user2_id == userid) {
    //                             //const matchedid1 = userid;
    //                             console.log('values2 =>>'+values2[0])
    //                             matchedid2.push(values2[0]);
    //                             console.log("FOUND A MATCH!!!!! "+values2[0])
    //                             console.log(userid+"------"+matchedid2)
    //                             console.log("===matchedid2===")
    //                             console.log(matchedid2)
    //                             console.log("===matchedid2===1")
    //                             console.log(matchedid2)
    //                         }
    //                         console.log("===matchedid2===2")
    //                         console.log(matchedid2)
    //                     }
    //                     console.log("===matchedid2===3")
    //                     console.log(matchedid2)
    //                 }
    //                 console.log("===matchedid2===4")
    //                 console.log(matchedid2)
    //             })
    //             console.log("===matchedid2===5")
    //             console.log(matchedid2)
    //         }
    //         console.log("===matchedid2===6")
    //         console.log(matchedid2)
    //         response.send('apple')
    //     })
    // }

    let checkMatch = (request, response) => {
        // console.log(request.body.id)
        let userid = request.cookies['userid']
        let values = [userid] //user is 10
        var matchedid2 = [];
        let data = {};
        db.index.checkMatcheddb3rdtry(values, (error,results) => {
            let matchedindex = 0;
            let matcheduser = 0;

            results.forEach ((element,index) => { //results show 10 only have 5 ppl likes
                if(element.user2_id == userid) { // loop the 5 ppl and check if any of them likes id = 10
                    matchedindex = index
                    matcheduser = element.user1_id
                    console.log("===WE FOUND A MATCH!!!!===")
                } else {
                    console.log("====No matches found====")
                }
                console.log(element)
                console.log("index = "+index)
            })
            console.log("and the number is~~~~"+matchedindex)
            console.log("you are matched with~~"+matcheduser)
            data = {
                matchedindex,
                matcheduser
            }
            response.send("componenets/mathcesCol",data)
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