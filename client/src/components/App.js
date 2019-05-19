import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from "react-redux";
import * as actions from '../actions'

import LoginForm from './Login/LoginForm'
import SigUp from './Login/SignUp'
import Header from './Header'
import ProdList from './Products/ShowProdList'
import AddNewProd from './Products/AddNewProd'
import ProdApp from './Products/App'
import DelProd from './Products/DeleteProd'
import ShowByBrand from './Products/FindByBrand'
import EditProduct from './Products/EditProduct'
import CreateOrder from './Order/CreateOrder'
import OrderApp from './Order/App'
import ShowAllOrders from './Order/ShowAllOrders'

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div >
                <BrowserRouter>
                    <div>
                        <Header/>
                    </div>
                    <div className={"container"}>
                        <Route exact path={"/homepage"} component={ProdApp}/>
                        <Route exact path={"/homepage"} component={OrderApp}/>

                        <Route exact path={"/login"} component={LoginForm}/>
                        <Route exact path={"/signup"} component={SigUp}/>

                        <Route exact path={"/showAllProd"} component={ProdList}/>
                        <Route exact path={"/addNewProd"} component={AddNewProd}/>
                        <Route exact path={"/delProd"} component={DelProd}/>
                        <Route exact path={"/showByBrand"} component={ShowByBrand}/>
                        <Route exact path={"/editProduct"} component={EditProduct}/>

                        <Route exact path={"/addNewOrder"} component={CreateOrder}/>
                        <Route exact path={"/showAllOrders"} component={ShowAllOrders}/>

                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);