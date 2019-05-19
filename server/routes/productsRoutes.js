module.exports = (app) => {
    const products = require('../controllers/productsController.js');

    app.post('/api/orders', products.create);

    app.get('/api/orders', products.findAll);

    app.get('/api/orders/findById', products.findOneById);

    app.get('/api/findByBrand/', products.findAllByBrand);

    app.put('/api/editProducts/', products.update);

    app.delete('/api/orders', products.delete);
};