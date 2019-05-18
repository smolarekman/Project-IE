module.exports = (app) => {
    const products = require('../controllers/productsController.js');

    app.post('/api/products', products.create);

    app.get('/api/products', products.findAll);

    app.get('/api/products/findById', products.findOneById);

    app.get('/api/findByBrand/', products.findAllByBrand);

    app.put('/api/editProducts/', products.update);

    app.delete('/api/products', products.delete);
};