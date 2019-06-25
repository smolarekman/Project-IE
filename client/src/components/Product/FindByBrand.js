import React, {Component, Fragment} from 'react';
import {findByBrand} from "./ProdActions";


class FindByBrand extends Component {
    constructor() {
        super();
        this.state = {
            Brand: '',
            products: [],
            error: '',
            descSort: false
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
    sortColumn(event, sortKey) {
        if (!this.state.descSort) {
            this.onSortDesc(event, sortKey);
            this.setState({descSort:true})
        } else {
            this.onSortAsc(event, sortKey);
            this.setState({descSort:false})
        }

    }

    onSortAsc(event, sortKey) {
        const products = this.state.products;
        this.setState({products: products.sort((a, b) => a[sortKey].toLowerCase() > b[sortKey].toLowerCase())});
    }

    onSortDesc(event, sortKey) {
        const products = this.state.products;
        this.setState({products: products.sort((a, b) => a[sortKey].toLowerCase() < b[sortKey].toLowerCase())});
    }

    sortColumn2(event, sortKey) {
        if (!this.state.descSort) {
            this.onSortDesc2(event, sortKey);
            this.setState({descSort:true})
        } else {
            this.onSortAsc2(event, sortKey);
            this.setState({descSort:false})
        }

    }

    onSortAsc2(event, sortKey) {
        const products = this.state.products;
        this.setState({products: products.sort((a, b) => a[sortKey] > b[sortKey])});
    }

    onSortDesc2(event, sortKey) {
        const products = this.state.products;
        this.setState({products: products.sort((a, b) => a[sortKey] < b[sortKey])});
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
                                    <th onClick={e => this.sortColumn(e, 'Brand')}>Brand</th>
                                    <th onClick={e => this.sortColumn(e, 'Model')}>Model</th>
                                    <th onClick={e => this.sortColumn2(e, 'Price')}>Price</th>
                                    <th onClick={e => this.sortColumn(e, '_id')}>Product_ID</th>
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