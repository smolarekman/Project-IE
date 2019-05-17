import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from "react-redux";
import * as actions from '../actions'

import LoginForm from './Login/LoginForm'
import SigUp from './Login/SignUp'
import Header from './Header'
import ProdList from './Products/ProductList'
import AddNewProd from './Products/AddNewProd'
import ProdApp from './Products/App'
import DelProd from './Products/DeleteProd'


class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                    </div>
                    <div className={"container"}>
                        <Route exact path={"/homepage"} component={ProdApp}/>

                        <Route exact path={"/login"} component={LoginForm}/>
                        <Route exact path={"/signup"} component={SigUp}/>

                        <Route exact path={"/showAllProd"} component={ProdList}/>
                        <Route exact path={"/addNewProd"} component={AddNewProd}/>
                        <Route exact path={"/delProd"} component={DelProd}/>


                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);