import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return <div>
                    <center>
                        <h3>Orders</h3>
                    </center>
                    <table className={"ui fixed table"}>
                        <thead>
                        <th>Action</th>
                        <th>Description</th>
                        </thead>
                        <tbody>
                        <tr>
                            <th><a href={"/addNewOrder"}>Make order</a></th>
                            <th>Add new order by providing userId and productId</th>
                        </tr>
                        <tr>
                            <th><a href={"/showAllOrders"}>Show all orders</a></th>
                            <th>List of all orders in db</th>
                        </tr>
                        <tr>
                            <th><a href={"/deleteOrder"}>Delete order</a></th>
                            <th>Delete order by providing orderID</th>
                        </tr>
                        </tbody>
                    </table>
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