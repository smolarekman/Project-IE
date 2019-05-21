import React, {Component, Fragment} from 'react';
import {findByBrand} from "./ProdActions";


class FindByBrand extends Component {
    constructor() {
        super();
        this.state = {
            Brand: '',
            products: [],
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,

        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const prod = {
            Brand: this.state.Brand
        };
        findByBrand(prod).then(
            res => {
                if (res.data.message) {

                    this.setState({
                        error: res.data.message

                    });

                } else {
                    this.setState({
                        products: res.data,
                        error:""

                    });
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
        }else{
            return '';
        }
    }

    render() {
        const {products} = this.state;
        return (
            <div>
                <div>
                    <div>
                        <form className={"ui form"} onSubmit={this.handleSubmit}>
                            <div className={"field"}>
                                <label>Brand</label>
                                <input type={"text"} name={"Brand"} placeholder={"Brand"} value={this.state.Brand}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className={"FormField"}>
                                <button className={"ui button"}>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <Fragment>
                            <center>
                                <h3>List of {this.state.Brand} products:</h3>
                            </center>
                            <table className={"ui fixed table"}>
                                <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Product_ID</th>
                                </tr>
                                </thead>
                                <tbody>
                                {products.map(product => (
                                    <tr key={product.Model}>
                                        <th>{product.Brand}</th>
                                        <th>{product.Model}</th>
                                        <th>{product.Price}</th>
                                        <th>{product._id}</th>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                        </Fragment>
                    </div>
                </div>
                {this.createError()}
            </div>
        );
    }

}

export default FindByBrand;