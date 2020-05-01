var React = require("react");
var MatchesCol = require("../components/matchesCol");

class index extends React.Component {
  render() {
    console.log(this.props.results[0])
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
    let list = this.props.results.map ((element) => {
        return (
            <div class="mb-2 box2">
                <div class="btn btn-block mainbtn btn-light" id={element.user_id} style={{boxShadow: "2px 2px 4px #000000"}}>
                    <div class="d-flex justify-content-start" style={{fontSize:"12px"}}>Game: {element.gamename}
                    </div>
                        <p>Name: {element.name}</p>
                        <p>Level: {element.level}</p>
                        <p>Server: {element.server}</p>
                        <p>Bio: {element.bio}</p>
                </div>
            </div>
        )
    });

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
                <button class="btn btnuser2 d-flex justify-content-start border"><b>username</b>
                    </button>
                    <div>
                    {userButtons}
                    </div>
                    <div>
                        Check for matches:
                    </div>
                   <MatchesCol/>

            </div>
        <div class="main">
            <div class='container box1 border mt-5'>

                {list}
                <div class='text-center' style={{marginTop:"450px"}}>
                    Interested to team with this player?
                    <div class='d-flex justify-content-center'>
                        <button class='btn yesbtn mt-3 mr-5' style={{width:'100px'}}>Yes</button>
                        <button class='btn nobtn mt-3 ml-5' style={{width:'100px'}}>No</button>
                    </div>
                </div>
            </div>
        </div>
        </body>
            <script src="./script.js"></script>
          </html>
        );
    }
}

module.exports = index;