var React = require("react");

class index extends React.Component {
    render() {
        //console.log(this.props)
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
    let list = "";
    if(this.props.results != null) {
        list = this.props.results.map ((element) => {
            return (
                <div class="mb-2">
                        <div class="btn btn-block btn-light" style={{boxShadow: "2px 2px 4px #000000"}}>
                            <div class="d-flex justify-content-start" style={{fontSize:"12px"}}>Game: {element.gamename}
                                <div class='ml-auto'>
                                <button class='xBtn' value={element.id} style={{backgroundColor:"rgba(255,255,255,0)", border:"none", margin:"-10px -10px 0 0"}}>
                                    <b>x</b></button>
                                </div>
                            </div>
                            <form method='get' action={'/index/'+element.gameid+'/'+element.id}>
                                <button class='btn btn-block'>
                                    <p>Name: {element.name}</p>
                                    <p>Level: {element.level}</p>
                                    <p>Server: {element.server}</p>
                                    <p>Bio: {element.bio}</p>
                                </button>
                            </form>
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
    let createbutton = '';
    if(this.props.loggedIn === true) {
        createbutton = <form method="get" action="/setup">
            <button class='btn btnuser p-0' type="submit" style={{fontSize:'20px'}}>
            <span>Create another game profile</span>
            </button>
        </form>
    }
    return (
        <html>
        <head>
            <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Barlow:wght@100;400&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="style.css"/>
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
                <div class='mx-2 mt-5' style={{borderBottom:"1px solid black"}}>
                    Matches:
                </div>
                    {matchlist}
            </div>
        <div class="main">
            <div class='container box1 mt-5'>
                <div class='row mb-3 d-flex justify-content-center'>
                    {createbutton}
                </div>
                <div>
                    {list}
                </div>
            </div>
        </div>
        <script src="./scriptsetup.js"></script>
        </body>
        </html>
        );
    }
}

module.exports = index;