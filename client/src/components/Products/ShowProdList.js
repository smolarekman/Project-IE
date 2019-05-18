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
                            {products.map(product => (
                                <tr key={product.Model}>
                                    <th>{product.Brand}</th>
                                    <th>{product.Model}</th>
                                    <th>{product.Price}</th>
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