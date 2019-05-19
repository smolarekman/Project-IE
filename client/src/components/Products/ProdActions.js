import axios from 'axios';

export const addNewProduct = prod => {
    return axios
        .post('/api/orders', {
            Brand: prod.Brand,
            Model: prod.Model,
            Price: prod.Price
        }).then(res => {
            return res.data;
        })
};

export const deleteProd = prod => {
    return axios
        .delete(`/api/products`,
            {
                data: {
                    productId: prod.productId
                }
            }).then(res => {
            return res.data;
        })
};

export const findByBrand = prod => {
    return axios
        .get('/api/findByBrand',
            {
                params: {
                    Brand: prod.Brand
                }
            }).then(res => {
            return res;
        });
};

export const editProduct = prod => {
    return axios
        .put('/api/editProducts/', {
            Brand: prod.Brand,
            Model: prod.Model,
            Price: prod.Price,
        }, {
            params: {
                productId: prod.productId
            }
        }).then(res => {
            return res;
        })
};
