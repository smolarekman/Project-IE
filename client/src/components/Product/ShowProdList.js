import React, {Fragment} from 'react';
import axios from 'axios/index';

class ShowProdList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    };

    componentDidMount() {
        axios.get('/api/products')
            .then(res => {
                this.setState({
                    products: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        const {products} = this.state;
        {
            return (
                <Fragment>
                    <div >
                        <center>
                            <h2>List of products:</h2>
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
                    </div>
                </Fragment>
            );
        }
    }
}

export default ShowProdList;