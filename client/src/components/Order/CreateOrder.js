import React, {Component} from 'react';
import {createOrder} from "./OrderAction";

class CreateOrder extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            prod: '',
            error:''
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

        const order = {
            User_ID: this.state.user,
            Product_ID: this.state.prod
        };
        createOrder(order).then(
            res => {
                if (res.data.message){
                    this.setState({
                        error:res.data.message
                    })
                } else{
                    this.props.history.push(`/homepage`)
                }

            }
        )
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
        } else {
            return '';
        }
    }

    render() {
        return (
            <div>
                <form className={"ui form"} onSubmit={this.handleSubmit}>
                    <div className={"field"}>
                        <label>User_ID</label>
                        <input type={"text"} name={"user"} required="required" placeholder={"User_ID"}
                               value={this.state.user} className={"ui input focus"}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"field"}>
                        <label>Product_ID</label>
                        <input type={"text"} name={"prod"} required="required" placeholder={"Product_ID"}
                               value={this.state.prod} className={"ui input focus"}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"FormField"}>
                        <button className={"ui button"}>
                            Send
                        </button>
                    </div>
                </form>
                <div>
                    <br/>
                    {this.createError()}
                </div>

            </div>
        );
    }

}

export default CreateOrder;