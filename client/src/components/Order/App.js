import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {

    renderContent() {

        switch (this.props.auth) {
            case null:
                return (<div>
                    <h2>Log in </h2>
                </div>);
            case false:
                return (<div>
                    <h2>Log in </h2>
                </div>);
            default:
                return <div>
                    <br/>
                    <li><a href={"/addNewOrder"}>Add new order</a></li>
                    <li><a href={"/showAllOrders"}>All orders</a></li>
                </div>
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }

}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(App);