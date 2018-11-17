const Order = require('../models/order.model');
const Product = require('../models/products.model');
const User = require('../models/user.model');

exports.create = (req, res) => {

    const order=new Order({
        User_ID: req.params.userId,
        Product_ID: req.params.productId
    });

    order.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas tworzenia zamowiena!"
        });
    });
};
exports.findAll = (req, res) => {
    Order.find()
        .then(orders => {
            res.send(orders);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas pobierania produktow!"
        });
    });

};
