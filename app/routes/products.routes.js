module.exports = (app) => {
    const products = require('../controllers/products.controller.js');

    app.post('/products', products.create);

    app.get('/products', products.findAll);

    app.get('/products/:Brand', products.findOne);

    app.put('/products/:Brand', products.update);

    app.delete('/products/:Brand', products.delete);
};