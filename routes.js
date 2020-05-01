module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  ===============xw==========================
   *  =========================================
   *  =========================================
   */

    // require the controller
    const main = require('./controllers/main')(allModels);
    const user = require('./controllers/user')(allModels);

    app.get('/', main.index);
    app.post('/matched',main.matched)
    //app.get('/checkmatch',main.checkMatch)
    app.get('/setup',user.setup)
    app.get('/login',user.getLogin)
    app.post('/login',user.postLogin)
    app.get('/register',user.getRegister)
    app.post('/register',user.postRegister)
    app.post('/postsetup',user.postSetup)
    app.get('/profile',user.profile)
    app.post('/delete/:id',user.deleteProfile)
    app.get('/all',user.profileAll)
    app.delete('/logout',user.logout)
};