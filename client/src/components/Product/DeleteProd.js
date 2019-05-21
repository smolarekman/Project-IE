import React, {Component} from "react"
import {deleteProd} from "./ProdActions";


class DeleteProd extends Component {
    constructor() {
        super();
        this.state = {
            productId: '',
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

        const prod = {
            productId: this.state.productId
        };
        deleteProd(prod).then(
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
                    <form className={"ui form"} onSubmit={this.handleSubmit}>
                        <div className={"field"}>
                            <label>
                                Product ID:
                                <input type="text" name={'productId'} value={this.state.productId}
                                       onChange={this.handleChange} required="required" className={"ui input focus"}/>
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

export default DeleteProd;