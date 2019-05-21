import React from 'react';
import {signUp} from "../../actions";

class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        signUp(user).then(res => {
            console.log(res)
            if (res.token) {
                this.props.history.push(`/`);
            } else {
                this.setState({
                    error: res[0]
                })
            }
        })
    }
    createError() {
        if (this.state.error.toString().length > 1) {
            return (
                <div className="ui warning message">
                    <i className="close icon"></i>
                    <div className="header">
                        Something went wrong!
                    </div>
                    {this.state.error}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className={"col"}>
                    <form onSubmit={this.handleSubmit} className={"col s12"}>
                        <div className={"col"}>
                            <div className={"input-field col s6"}>
                                <i className={"material-icons prefix"}>account_circle</i>
                                <input type="email" id="email" className="FormField__Input" placeholder="Email"
                                       required="required"
                                       name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className={"input-field col s6"}>
                                <i className={"material-icons prefix"}>keyboard_hide</i>
                                <input type="password" id="password" className="FormField__Input" placeholder="Password"
                                       required="required"
                                       name="password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className={"FormField"}>
                                <button className={"ui button"}>
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {this.createError()}
            </div>
        );
    }
}

export default SignUp;