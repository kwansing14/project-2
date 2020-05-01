var React = require("react");
class column extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div> THIS IS WORKING!!</div>
            </div>
        )
    }
}

module.exports = column;