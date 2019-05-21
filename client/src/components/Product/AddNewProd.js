import React, {Component} from 'react';
import {addNewProduct} from "./ProdActions";

class AddNewProd extends Component {
    constructor() {
        super();
        this.state = {
            Brand: '',
            Model: '',
            Price: 0,
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
            Brand: this.state.Brand,
            Model: this.state.Model,
            Price: this.state.Price
        };
        addNewProduct(prod).then(
            res => {
                if (res.Brand) {
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
        } else {
            return "";
        }
    }

    render() {
        return (
            <div>
                <div>
                    <form className={"ui form"} onSubmit={this.handleSubmit}>
                        <div className={"field"}>
                            <label>Brand</label>
                            <input type={"text"} name={"Brand"} placeholder={"Brand"} value={this.state.Brand}
                                   onChange={this.handleChange} required="required" className={"ui input focus"}/>
                        </div>
                        <div className={"field"}>
                            <label>Model</label>
                            <input type={"text"} name={"Model"} placeholder={"Model"} value={this.state.Model}
                                   onChange={this.handleChange} required="required" className={"ui input focus"}/>
                        </div>
                        <div className={"field"}>
                            <label>Price</label>
                            <input type={"number"} name={"Price"} placeholder={"Price"} value={this.state.Price}
                                   onChange={this.handleChange} required="required" className={"ui input focus"}/>
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

export default AddNewProd;