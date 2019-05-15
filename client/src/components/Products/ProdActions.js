import axios from 'axios';

export const addNewProduct = prod => {
    return axios
        .post('/api/products', {
            Brand: prod.Brand,
            Model: prod.Model,
            Price: prod.Price
        }).then(res => {
            return res.data;
        })
};