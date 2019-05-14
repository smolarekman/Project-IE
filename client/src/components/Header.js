import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component {

    renderContent() {

        console.log(this.props.auth);

        switch (this.props.auth) {
            case null:
                return (<div>
                    <li><a href={"/login"}>Login</a></li>
                    <li><a href={"/signup"}>Sign Up</a></li>
                </div>);
            case false:
                return <li><a href={"/login"}>Login</a></li>;
            default:
                return <div>
                    <li><a href={"/profile"}>Profile</a></li>
                    <li><a href={"/api/logout"}>Logout</a></li>
                </div>
        }
    }

    render() {
        return (
            <nav>
                <div className={"red nav-wrapper"}>
                    <Link to={this.props.auth?'/':'/login'} className={"left brand-logo"} >
                        Marify
                    </Link>
                    <ul className={"right"}>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);