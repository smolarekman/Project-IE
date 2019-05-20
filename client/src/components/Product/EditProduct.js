import React, {Component} from 'react'
import {editProduct} from "./ProdActions";

class EditProduct extends Component {
    constructor() {
        super();
        this.state = {
            productId: '',
            Brand: '',
            Model: '',
            Price: 0
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
            productId: this.state.productId,
            Brand: this.state.Brand,
            Model: this.state.Model,
            Price: this.state.Price
        };
        editProduct(prod).then(
            res => {
                if (res) {
                    console.log(res);
                    this.props.history.push(`/homepage`)
                }
            }
        )
    }

    render() {
        return (
            <div>
                <form className={"ui form"} onSubmit={this.handleSubmit}>
                    <div className={"field"}>
                        <label>ProductId</label>
                        <input type={"text"} name={"productId"} placeholder={"Product ID"} value={this.state.productId}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"field"}>
                        <label>Brand</label>
                        <input type={"text"} name={"Brand"} placeholder={"Brand"} value={this.state.Brand}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"field"}>
                        <label>Model</label>
                        <input type={"text"} name={"Model"} placeholder={"Model"} value={this.state.Model}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"field"}>
                        <label>Price</label>
                        <input type={"number"} name={"Price"} placeholder={"Price"} value={this.state.Price}
                               onChange={this.handleChange}/>
                    </div>
                    <button className={"ui button"}>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditProduct;