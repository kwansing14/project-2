module.exports = (db) => {
    /**
    * ===========================================
    * Controller logic
    * ===========================================
    */
    const sha256 = require('js-sha256');

    let getLogin = (request, response) => {
        response.render('main/login');
    };
    let postLogin = (request, response) => {
        console.log(request.body)
        const values = [request.body.name];
        db.users.postLogin(values, (error, results) => {
            console.log("controller results>>>>>>"+results)
            //console.log("YAAAYYYYY");
            //console.log(results)
            if( error ){
              console.log("ERRRRRRRRRROR");
              console.log(error);
            }
            console.log("YAAAYYUUUUUUUYYYYYY");
            console.log("SELECT RESULT:")
            console.log(results);

            // if there is a result in the array
            if( results != null ){
              // we have a match with the name
              // response.send("heeeyyyy");heeeyyyy

                let requestPassword = request.body.password;

                if(sha256(requestPassword) === results[0].password){
                // if(requestPassword === results[0].password){
                    response.cookie('logged in', 'true');
                    response.cookie('username',results[0].name)
                    response.cookie('userid',results[0].id)
                    response.redirect('/profile')
                }else{
                    data={
                        status: "pwwrong"
                    }
                     // nothing matched
                    response.status(403);
                    response.render('main/login',data)
                }
            }else{
                data={
                        status: "userwrong"
                }
                response.status(403);
                response.render('main/login',data)
            }
        })
    }
    let getRegister = (request, response) => {
        response.render('main/register');
    }
    let postRegister = (request, response) => {
        values = [request.body.name, sha256(request.body.password)]
        db.users.postRegister(values, (error, results) => {
            //console.log("YAAAYYYYY");
            //console.log(results)
            response.cookie('logged in', 'true');
            response.cookie('username',results[0].name)
            response.cookie('userid',results[0].id)
            response.redirect('/profile');
        })
    }

    let logout = (request, response) => {
        response.clearCookie('logged in');
        response.clearCookie('userid');
        response.clearCookie('username');
        response.redirect('/')
    };

    let setup = (request,response) => {
        var username = request.cookies['username']
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        data = {
            username,
            loggedIn
        }
        response.render('main/setup', data)
    }
    let postSetup = (request,response) => {
        console.log(request.body)
        let userid = request.cookies['userid']
        values = [request.body.gameId, request.body.name, request.body.level, request.body.server, request.body.bio, userid]
        db.users.postSetupdb(values, (error, results) => {
            //console.log("YAAAYYYYY");
            //console.log(results)
            console.log(results)
            response.redirect('profile');
        })
    }
    let profile = (request,response) => {
        var username = request.cookies['username']
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        let userid = request.cookies['userid']
        values = [userid]
        db.users.getProfile(values, (error, results) => {
            //response.send(tweets)
            //console.log(results)
            data = {
                results,
                loggedIn,
                username
            }
            response.render('main/profile',data);
        });
    }

    let profileAll = (request,response) => {
        var username = request.cookies['username']
        let loggedIn = false
        if( request.cookies['logged in'] === 'true'){
            loggedIn = true;
        }
        db.users.allProfile((error, results) => {
            //response.send(tweets)
            //console.log(results)
            data = {
                results,
                loggedIn,
                username
            }
            //console.log("data>>>>>>>"+data)
            response.render('main/listAll',data);
        });
    }

    let deleteProfile = (request,response) => {
        values = [request.params.id]
        console.log(request.params.id)
        console.log("DELETTINNGGGGGGGG")
        db.users.deleteProfiledb(values, (error, results) => {
        //     console.log("data>>>>>>>"+results.rows)
            //response.redirect('/profile');
        });
    }
  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    getLogin: getLogin,
    postLogin: postLogin,
    getRegister: getRegister,
    postRegister: postRegister,
    logout: logout,
 ///   userPage,
    setup,
    postSetup,
    profile,
    deleteProfile,
    profileAll
  };
}