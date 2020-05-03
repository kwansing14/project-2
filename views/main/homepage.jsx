var React = require("react");

class playlist extends React.Component {
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
                    <h1>Let's play together</h1>
                </div>
                <div class='row d-flex justify-content-center mt-5'>
                    <div class="d-block flex-column rounded-lg" style={{width:'200px', backgroundColor:"#a6b1e1", boxShadow: "2px 2px 4px #000000"}}>
                        <div class='m-3 d-flex justify-content-around'>
                            <div>
                                <form method="get" action="/register">
                                    <button class="btn btnuser p-0"><span>Register</span></button>
                                </form>
                            </div>
                            <div>
                                <form method="get" action="/login">
                                    <button class="btn btnuser p-0"><span>Login</span></button>
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