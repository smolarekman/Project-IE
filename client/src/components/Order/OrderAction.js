import axios from 'axios';

export const createOrder = order => {
    return axios
        .post('/api/orders/addOrder', {
            User_ID: order.User_ID,
            Product_ID: order.Product_ID
        }).then(res => {
            return res;
        })
};

export const deleteOrder = order => {
    return axios
        .delete(`/api/orders`,
            {
                data: {
                    orderId: order.orderId
                }
            }).then(res => {
            return res.data;
        })
};