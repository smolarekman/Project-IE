import React, {Fragment} from 'react';
import axios from 'axios/index';

class ShowProdList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            descSort: false
        };
        //this.onSort = this.onSort.bind(this)
    };


    componentDidMount() {
        axios.get('/api/products')
            .then(res => {
                this.setState({
                    products: res.data,
                    descSort: false
                });
            })
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
        {
            return (
                <Fragment>
                    <div>
                        <center>
                            <h2>List of products:</h2>
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
                                <tr key={product._id}>
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