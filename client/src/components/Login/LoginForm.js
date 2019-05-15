import React from 'react';
import {loginTo} from "../../actions";

class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
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

        loginTo(user).then(res => {
            if (res) {
                this.props.history.push(`/`);
                console.log(res);
            }
        })
    }

    render() {
        return (
            <div className={"col"}>
                <form onSubmit={this.handleSubmit} className={"col s12"}>
                    <div className={"col"}>
                        <div className={"input-field col s6"}>
                            <i className={"material-icons prefix"}>account_circle</i>
                            <input type="text" id="email" className="FormField__Input" placeholder="Podaj email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className={"input-field col s6"}>
                            <i className={"material-icons prefix"}>keyboard_hide</i>
                            <input type="password" id="password" className="FormField__Input" placeholder="Podaj hasło" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className={"FormField"}>

                            <button className={"FormField__Button mr-20"}>
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }

}

export default LoginForm;