import React, {Component} from "react"
import {deleteOrder} from "./OrderAction";


class DeleteOrder extends Component {
    constructor() {
        super();
        this.state = {
            orderId: ''
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
                if (res) {
                    this.props.history.push(`/homepage`)
                }
            }
        )
    }

    render() {
        return (
            <div className={"container"}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Product ID:
                        <input type="text" name={'orderId'} value={this.state.orderId}
                               onChange={this.handleChange}/>
                    </label>
                    <button>Delete</button>
                </form>
            </div>

        );
    }
}

export default DeleteOrder;