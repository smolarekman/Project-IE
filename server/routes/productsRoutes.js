module.exports = (app) => {
    const products = require('../controllers/products.controller.js');

    app.post('/api/products', products.create);

    app.get('/api/products', products.findAll);

    app.get('/api/products/findById/:productId', products.findOneById);

    app.get('/api/products/findByBrand/:Brand', products.findAllByBrand);

    app.put('/api/products/:productId', products.update);

    app.delete('/api/products', products.delete);
};