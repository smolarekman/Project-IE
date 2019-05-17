import React, {Component} from 'react';
import {connect} from "react-redux";


class App extends Component {

    renderContent() {

        switch (this.props.auth) {
            case null:
                return (<div>
                    <h2>Log in   </h2>
                </div>);
            case false:
                return (<div>
                    <h2>Log in  </h2>
                </div>);
            default:
                return <div>
                    <li><a href={"/addNewProd"}>Add New Product</a></li>
                    <li><a href={"/showAllProd"}>Show all products</a></li>
                    <li><a href={"/delProd"}>delProd</a></li>
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