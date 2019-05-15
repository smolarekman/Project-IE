import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from "react-redux";
import * as actions from '../actions'

import LoginForm from './Login/LoginForm'
import SigUp from './Login/SignUp'
import Header from './Header'
import ProdList from './ProductList'
import AddNewProd from './Products/AddNewProd'


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
                        <Route exact path={"/login"} component={LoginForm}/>
                        <Route exact path={"/signup"} component={SigUp}/>
                        <Route exact path={"/showAllList"} component={ProdList}/>
                        <Route exact path={"/addNewProd"} component={AddNewProd}/>
                        <Route exact path={"/showProd"} component={ProdList}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);