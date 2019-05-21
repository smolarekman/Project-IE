import React, {Component} from 'react'
import {connect} from "react-redux";
import {showProfile} from "../../actions";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            usertoken: '',
            dataEmail: '',
            dataPass: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.setState({
            usertoken: this.props.auth
        })

    }

    handleSubmit(e) {
        e.preventDefault();

        const ttoken = {
            token: this.state.usertoken
        };

        showProfile(ttoken).then(res => {
            if (res) {
                console.log(res)
                this.setState({
                    dataEmail: res.email,
                    dataPass: res.password

                })
            }
        })
    }

    createMessage() {
        if (this.state.dataEmail.toString().length > 1) {
            return (
                <div className="ui positive message">
                    <i className="close icon"></i>
                    <div className="header">
                        Your profile
                    </div>
                    <p>Your email: {this.state.dataEmail}, your passowrd: {this.state.dataPass}</p>
                </div>
            );
        } else {
            return "";
        }
    }

    render() {
        var token = this.props.auth;
        var arr, arr2, arr3, arr4;
        if (token != null) {
            arr4 = token.toString().length;
            arr = token.toString().slice(0, arr4 / 3);
            arr2 = token.toString().slice((arr4 / 3) + 1, 2 * (arr4 / 3));
            arr3 = token.toString().slice(2 * (arr4 / 3) + 1);
        }

        return (
            <div>


                <div className={"col"}>
                    <center>
                        <h4>Your token: <br/></h4>
                        <p>{arr}<br/>{arr2}<br/>{arr3}<br/></p>
                    </center>
                    <br/><br/>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>
                                    <h6>Your token:</h6>
                                    <input type="text" name={'usertoken'} value={this.state.usertoken}
                                           className="FormField__Input"
                                           onChange={this.handleChange}/>
                                </label>
                            </div>
                            <div className={"FormField"}>
                                <button className={"ui button"}>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    {this.createMessage()}
                </div>
            </div>
        );
    }

}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Profile);