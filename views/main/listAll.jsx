var React = require("react");

class index extends React.Component {
    render() {
    //console.log("propsss"+this.props.results[0])
    ///RETURNS
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
            <div class="mb-2">
                    <div class="btn btn-block btn-light" style={{boxShadow: "2px 2px 4px #000000"}}>
                        <div class="d-flex justify-content-start" style={{fontSize:"12px"}}>Game: {element.gamename}
                            <div class='ml-auto'>
                            <button class='xBtn' value={element.id} style={{backgroundColor:"rgba(255,255,255,0)", border:"none", margin:"-10px -10px 0 0"}}>
                                <b>x</b></button>
                            </div>
                        </div>
                        <form method='get' action='/'>
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
                <div class='row d-flex justify-content-center'>
                    <form method="get" action="/setup">
                        <button class='btn btn-link border' type="submit">Create another game profile</button>
                    </form>
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