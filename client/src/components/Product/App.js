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
                    <center>
                        <h3>Products</h3>
                    </center>
                    <table className={"ui fixed table"}>
                        <thead>
                        <th>Action</th>
                        <th>Description</th>
                        </thead>
                        <tbody>
                        <tr>
                            <th><a href={"/addNewProd"}>Add product</a></th>
                            <th>Add new product by providing brand, model and price</th>
                        </tr>
                        <tr>
                            <th><a href={"/showAllProd"}>Show all products</a></th>
                            <th>List of all products in db</th>
                        </tr>
                        <tr>
                            <th><a href={"/delProd"}>Delete product</a></th>
                            <th>Delete product by providing productID</th>
                        </tr>
                        <tr>
                            <th><a href={"/showByBrand"}>Find by brand</a></th>
                            <th>Show list of product by their brand</th>
                        </tr>
                        <tr>
                            <th><a href={"/editProduct"}>Edit product</a></th>
                            <th>Edit product by providing productID</th>
                        </tr>
                        </tbody>
                    </table>





                    {/*<li><a href={"/addNewProd"}>Add New Product</a></li>*/}
                    {/*<li><a href={"/showAllProd"}>Show all products</a></li>*/}
                    {/*<li><a href={"/delProd"}>delProd</a></li>*/}
                    {/*<li><a href={"/showByBrand"}>Brand</a></li>*/}
                    {/*<li><a href={"/editProduct"}>Edit</a></li>*/}
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