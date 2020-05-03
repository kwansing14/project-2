import React, {useState} from 'react';

class index extends React.Component {
    render() {

    let userButtons = (
       <div class='mt-3 d-flex justify-content-around'>
            <div>
                <form method="get" action="/register">
                    <button class="btn btnuser p-0 ml-5"><span>Register</span></button>
                </form>
            </div>
            <div>
                <form method="get" action="/login">
                    <button class="btn btnuser p-0 mr-5"><span>Login</span></button>
                </form>
            </div>
        </div>);
    if(this.props.loggedIn === true){
        userButtons = (
                <div class='d-flex'>
                    Username: &nbsp;
                    <form method="get" action="/profile">
                        <button class='btn btnuser p-0' style={{marginTop:"-3px"}}>
                            <span>{this.props.username}</span>
                        </button>
                    </form>
                    <div class='ml-auto'>
                        <form method="post" action="/logout?_method=delete">
                            <button class='btn btnuser p-0' style={{marginTop:"-3px"}}><span>Log out</span></button>
                        </form>
                    </div>
                </div>
        )
    }
    let matching = "";
    if(this.props.results != null){
        matching = (
            <div class='mt-3'>
                    Game:&nbsp;
                    <button class='btn btnuser p-0' style={{marginTop:"-3px"}}>
                        <span>{this.props.results[0].gamename}</span>
                    </button>
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
            <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Barlow:wght@100;400&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="stylesetup.css"/>
        </head>
        <body>
            <div class="sidenav">
                <div class='mx-2' style={{margin:"10px", borderBottom:"1px solid black"}}>
                    <b>User info:</b>
                </div>
                <div class='m-3'>
                    {userButtons}
                    {matching}
                </div>
            </div>
            <div class="main">

                <div class='container mt-5 d-flex justify-content-center'>
                    <form class='m-3 col-6 rounded-lg' action="/postsetup" method="POST" style={{backgroundColor:'#a6b1e1', boxShadow: "2px 2px 4px #000000"}}>
                        <div>
                            Set up your profile
                        </div>
                        <div>
                            Please Select the game u play:
                            <select name="gameId" class="custom-select" id="inputGroupSelect02" style={{marginBottom:'30px'}}>
                            <option selected>Choose...</option>
                            <option value="1">Dota</option>
                            <option value="2">Maplestory</option>
                            <option value="3">League of Legends</option>
                            <option value="4">Overwatch</option>
                        </select>
                        </div>
                        <div>
                        Name
                        </div>
                            <input name="name" type="text" class="form-control"/>
                        <div>
                        Level
                        </div>
                            <input name="level" type="text" class="form-control"/>
                        <div>
                        Server
                        </div>
                            <input name="server" type="text" class="form-control"/>
                        <div>
                        Bio
                        </div>
                            <input name="bio" type="text" class="form-control"/>
                        <div class='row d-flex justify-content-center'>
                            <button class='btn btnuser p-0 mb-3'><span>Submit</span></button>
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