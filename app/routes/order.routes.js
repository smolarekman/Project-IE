module.exports = (app) => {
    const order = require('../controllers/order.controller.js');

    app.post('/order/:productId/:userId', order.create);

    app.get('/order', order.findAll);
    //
    // app.get('/products/findById/:productId', order.findOneById);
    //
    // app.get('/products/findByBrand/:Brand', order.findAllByBrand);
    //
    // app.put('/products/:productId', order.update);
    //
    // app.delete('/products/:productId', order.delete);
};