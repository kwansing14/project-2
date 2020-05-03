import React, {useState} from 'react';

class index extends React.Component {
    render() {
    //==============================
    //======IMAGE UPLOADING=========





    //======IMAGE UPLOADING==========
    //===============================


    let userButtons = (
        <div class='my-3 d-flex justify-content-end'>
            <div>
                <form method="get" action="/register">
                    <input type="submit" value="Register" class="btn btn-dark rounded-pill" style={{width:"100px"}}/>
                </form>
            </div>
            <div>
                <form method="get" action="/login">
                    <input type="submit" value="Login" class="ml-2 btn btn-dark rounded-pill" style={{width:"100px"}}/>
                </form>
            </div>
        </div>);
    if(this.props.loggedIn === true){
        userButtons = (
            <div id="welcome" class='d-flex my-3' ><b class='d-flex'>Welcome, {this.props.username}</b>
                <div class='ml-auto'>
                    <form method="post" action="/logout?_method=delete">
                        <button class="btn btn-dark rounded-pill" style={{width:"100px", boxShadow: "2px 2px 4px #000000"}}>Log out</button>
                    </form>
                </div>
            </div>
        )
    }
    ///RETURNS
    return (
        <html>
        <head>
            <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"/>
            <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
            <div class="sidenav">
                <button class="btn btnuser2 d-flex justify-content-start border" style={{fontSize:"11px"}}><b>username</b>
                </button>
                {userButtons}
            </div>
        <div class="main">

            <div class='container border mt-5'>
                <form action="/postsetup" method="POST">
                    <div>
                        Set up your profile
                    </div>
                    <div class='border'>
                        Please Select the game u play:
                        <select name="gameId" class="custom-select" id="inputGroupSelect02">
                        <option selected>Choose...</option>
                        <option value="1">Dota</option>
                        <option value="2">Maplestory</option>
                        <option value="3">League of Legends</option>
                        <option value="4">Overwatch</option>
                    </select>
                    </div>
                    <div class='border'>
                    Name
                    </div>
                    <input name="name" type="text" class="form-control"/>
                    <div class='border'>
                    Level
                    </div>
                    <input name="level" type="text" class="form-control"/>
                    <div class='border'>
                    Server
                    </div>
                    <input name="server" type="text" class="form-control"/>
                    <div class='border'>
                    Bio
                    </div>
                    <input name="bio" type="text" class="form-control"/>
                    <div class='row d-flex justify-content-center'>
                        <input type="submit"/>
                    </div>
                </form>

            </div>

        </div>
        </body>
            <script src="./scriptsetup.js"></script>
          </html>
        );
    }
}

module.exports = index;