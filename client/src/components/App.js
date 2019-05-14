import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from "react-redux";
import * as actions from '../actions'
import LoginForm from './LoginForm'
import SigUp from './SignUp';
import Header from './Header'
import ProdList from './ProductList'

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
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);