module.exports = (app) => {
    const order = require('../controllers/order.controller.js');

    app.post('/order/:productId/:userId', order.create);

    app.get('/order', order.findAll);
    //
    // server.get('/products/findById/:productId', order.findOneById);
    //
    // server.get('/products/findByBrand/:Brand', order.findAllByBrand);
    //
    // server.put('/products/:productId', order.update);
    //
    // server.delete('/products/:productId', order.delete);
};