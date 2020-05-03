var React = require("react");
var MatchesCol = require("../components/matchesCol");

class index extends React.Component {
  render() {
    let gamename = "";
    //console.log(this.props.results)
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
    if(this.props.loggedIn === true && this.props.results != null){
        userButtons = (
            <div class='m-3'>
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
                <div class='mt-3'>
                    Game:&nbsp;
                    <button class='btn btnuser p-0' style={{marginTop:"-3px"}}>
                        <span>{this.props.results[0].gamename}</span>
                    </button>
                </div>
            </div>
        )
    }
    let list="";
    if (this.props.results != null) {
        list = this.props.results.map ((element) => {
            return (
                <div class="mb-2 box2" style={{top:'170px', width:'95%', minWidth:'400px'}}>
                    <div class="btn btn-block mainbtn btn-light" id={element.id} style={{boxShadow: "2px 2px 4px #000000"}}>
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
    }

    let matchlist = "";
    if(this.props.loggedIn === true && this.props.matchResults != null){
        matchlist = this.props.matchResults.map ((element) => {
            return (
                <div class='d-flex justify-content-center mt-2'>
                    <button class='btn btn-three'>
                        <span>
                            IGN: {element.username}<br/>
                            Game: {element.name}
                        </span>
                    </button>
                </div>
            )
        })
    }

    return (
        <html>
        <head>
            <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Barlow:wght@100;400&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="../style.css"/>
        </head>
        <body>
            <div class="sidenav">
                <div class='mx-2' style={{margin:"10px", borderBottom:"1px solid black"}}>
                    <b>User info:</b>
                </div>
                    {userButtons}
                <div class='mx-2 mt-5' style={{borderBottom:"1px solid black"}}>
                    Matches:
                </div>
                {matchlist}
            </div>
            <div class="main">
                <div class='container d-flex justify-content-center box1 mt-5'>
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
            <script src="../script.js"></script>
        </html>
        );
    }
}

module.exports = index;