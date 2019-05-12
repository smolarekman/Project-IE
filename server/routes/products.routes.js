module.exports = (app) => {
    const products = require('../controllers/products.controller.js');

    app.post('/products', products.create);

    app.get('/products', products.findAll);

    app.get('/products/findById/:productId', products.findOneById);

    app.get('/products/findByBrand/:Brand', products.findAllByBrand);

    app.put('/products/:productId', products.update);

    app.delete('/products/:productId', products.delete);
};