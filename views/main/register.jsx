var React = require("react");

class register extends React.Component {
  render() {
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
                    <h3>Register here !</h3>
                </div>
                <div class='row d-flex justify-content-center'>
                    <div class=" w-50 d-block flex-column rounded-lg p-3 m-1" style={{minWidth:"350px", backgroundColor:"#a6b1e1", boxShadow: "2px 2px 4px #000000"}}>
                        <div class="mb-2">
                            <div class="btn btn-block d-flex justify-content-center" style={{color:"white", backgroundColor:"#424874", boxShadow: "2px 2px 4px #000000"}}>
                               <form action="/register" method="POST">
                                    <div class='row d-flex'>
                                        <div class='col text-right'>
                                            <p>Username:</p>
                                            <p>Password:</p>
                                        </div>
                                        <div class='col'>
                                            <p><input name="name"/></p>
                                            <p><input name="password" type="password" id="mypw"/></p>
                                            {/*<p><input type="checkbox" onclick="myFunction()"/>Show Password</p>*/}
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

module.exports = register;