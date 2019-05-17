import React, {Fragment} from 'react';
import axios from 'axios/index';

class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: [],
            todoItem: {}
        }
    };

    componentDidMount() {
        axios.get('/api/products')
            .then(res => {
                this.setState({
                    brand: res.data
                });
            })
    }

    render() {
        const {brand} = this.state;
        {
            return (
                <Fragment>
                    <div className={"container"}>
                        <center>
                            <h2>List of products:</h2>
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
                            {brand.map(brand => (
                                <tr>
                                    <th>{brand.Brand}</th>
                                    <th>{brand.Model}</th>
                                    <th>{brand.Price}</th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Fragment>
            );
        }
    }
}

export default ProductList;