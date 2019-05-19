import React, {Component} from 'react';
import {createOrder} from "./OrderAction";

class CreateOrder extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            prod: ''
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

                this.props.history.push(`/homepage`)

            }
        )
    }

    render() {
        return (
            <div>
                <form className={"ui form"} onSubmit={this.handleSubmit}>
                    <div className={"field"}>
                        <label>User_ID</label>
                        <input type={"text"} name={"user"} required="required" placeholder={"User_ID"} value={this.state.user}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"field"}>
                        <label>Product_ID</label>
                        <input type={"text"} name={"prod"} required="required" placeholder={"Product_ID"}
                               value={this.state.prod} onChange={this.handleChange}/>
                    </div>

                    <button className={"ui button"}>Submit</button>
                </form>

            </div>
        );
    }

}

export default CreateOrder;