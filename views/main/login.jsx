var React = require("react");

class playlist extends React.Component {
  render() {
    let msg = "";
    let userButtons;
    if( this.props.status === "userwrong"){
        msg = (<h1>Username Invalid, try again!</h1>);
    }
    if( this.props.status === "pwwrong"){
        msg = (<h1>Password Invalid, try again!</h1>);
    }
    return (
        <html>
        <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Barlow:wght@100;400&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="style.css"/>
        </head>
        <body style={{backgroundColor:"#dcd6f7"}}>
            <div class='container mt-5'>
                <div class="row d-flex justify-content-center">
                    <h1 style={{marginLeft:"-100px"}}>Let's play together</h1>
                </div>

                <div class="row d-flex justify-content-center mt-4">
                    <h3>Login here !</h3>
                    <h3>{msg}</h3>
                </div>
                <div class='row d-flex justify-content-center'>
                    <div class=" w-50 d-block flex-column rounded-lg p-3 m-1" style={{minWidth:"350px", backgroundColor:"#a6b1e1", boxShadow: "2px 2px 4px #000000"}}>
                        <div class="mb-2">
                            <div class="btn btn-block d-flex justify-content-center" style={{color:"white", backgroundColor:"#424874", boxShadow: "2px 2px 4px #000000"}}>
                               <form action="/login" method="POST">
                                    <div class='row text-right'>
                                        <div class='col'>
                                            <p>Username:</p>
                                            <p>Password:</p>
                                        </div>
                                        <div class='col'>
                                            <p><input name="name"/></p>
                                            <p><input name="password" type="password" id="mypw"/></p>
                                        </div>
                                    </div>
                                    <div class='row d-flex justify-content-center'>
                                        <input type="submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="./scriptpw.js"></script>

        </body>
      </html>
    );
  }
}

module.exports = playlist;