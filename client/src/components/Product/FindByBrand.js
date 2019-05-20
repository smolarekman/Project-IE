import React, {Component, Fragment} from 'react';
import {findByBrand} from "./ProdActions";


class FindByBrand extends Component {
    constructor() {
        super();
        this.state = {
            Brand: '',
            products: []
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
                this.setState({
                    products: res.data
                });
            }
        )
    }

    render() {
        const {products} = this.state;
        return (
            <div>
                <div className={"ui form"}>
                    <form className={"ui form"} onSubmit={this.handleSubmit}>
                        <div className={"field"}>
                            <label>Brand</label>
                            <input type={"text"} name={"Brand"} placeholder={"Brand"} value={this.state.Brand}
                                   onChange={this.handleChange}/>
                        </div>
                        <button className={"ui button"}>Submit</button>
                    </form>
                </div>

                <div>
                    <Fragment>
                        <center>
                            <h3>List of {this.state.Brand} products:</h3>
                        </center>
                        <table className={"striped"}>
                            <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map(product => (
                                <tr key={product.Model}>
                                    <th>{product.Brand}</th>
                                    <th>{product.Model}</th>
                                    <th>{product.Price}</th>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </Fragment>
                </div>
            </div>
        );
    }

}

export default FindByBrand;