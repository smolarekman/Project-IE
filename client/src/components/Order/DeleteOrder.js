import React, {Component} from "react"
import {deleteOrder} from "./OrderAction";


class DeleteOrder extends Component {
    constructor() {
        super();
        this.state = {
            orderId: '',
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

        const order = {
            orderId: this.state.orderId
        };
        deleteOrder(order).then(
            res => {
                if (res.messageOK) {
                    this.props.history.push(`/homepage`)
                } else {
                    this.setState({
                        error: res.message
                    })
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
        }
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} className={"ui form"}>
                        <div className={"field"}>
                            <label>
                                Product ID:
                                <input type="text" name={'orderId'} value={this.state.orderId}
                                       onChange={this.handleChange} className={"ui input focus"}/>
                            </label>
                        </div>
                        <div className={"FormField"}>
                            <button className={"ui button"}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                {this.createError()}
            </div>

        );
    }
}

export default DeleteOrder;