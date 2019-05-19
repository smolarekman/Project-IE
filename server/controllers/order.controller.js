const Order = require('../models/order.model');
const Product = require('../models/products.model');
const User = require('../models/user.model');

exports.create = (req, res) => {


    if (!req.body.User_ID || !req.body.Product_ID ) {
        return res.status(400).send({
            message: "Fill orders, model and price field!"
        });
    }
    const order=new Order({
        User_ID: req.body.User_ID,
        Product_ID: req.body.Product_ID
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
