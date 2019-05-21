import React, {Fragment} from 'react';
import axios from 'axios/index';

class ShowAllOrders extends React.Component {
    constructor() {
        super();
        this.state = {
            orders: []
        }
    };

    componentDidMount() {
        axios.get('/api/showAllOrders')
            .then(res => {
                this.setState({
                    orders: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        const {orders} = this.state;
        {
            return (
                <Fragment>
                    <div>
                        <center>
                            <h2>List of orders:</h2>
                        </center>
                        <table className={"ui fixed table"}>
                            <thead>
                            <tr>
                                <th>User_ID</th>
                                <th>Product_ID</th>

                            </tr>
                            </thead>
                            <tbody>
                            {orders.map(order => (
                                <tr key={order.User_ID}>
                                    <th>{order.User_ID}</th>
                                    <th>{order.Product_ID}</th>

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

export default ShowAllOrders;