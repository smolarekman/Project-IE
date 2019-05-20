module.exports = (app) => {
    const order = require('../controllers/order.controller.js');

    app.post('/api/orders/addOrder', order.create);

    app.get('/api/showAllOrders', order.findAll);

    app.delete('/api/orders', order.delete)

    //
    // server.get('/orders/findById/:productId', order.findOneById);
    //
    // server.get('/orders/findByBrand/:Brand', order.findAllByBrand);
    //
    // server.put('/orders/:productId', order.update);
    //
    // server.delete('/orders/:productId', order.delete);
};