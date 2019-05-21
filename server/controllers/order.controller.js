const Order = require('../models/order.model');
const Product = require('../models/products.model');
const User = require('../models/user');

exports.create = (req, res) => {

    if (!req.body.User_ID || !req.body.Product_ID) {
        return res.status(400).send({
            message: "Fill orders, model and price field!"
        });
    }

    User.find({_id: req.body.User_ID}).then(user => {
        if (user) {
            Product.find({_id: req.body.Product_ID}).then(prod => {
                if (prod) {
                    const order = new Order({
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
                }
            }).catch(err => {
                if (err) {
                    return res.send({
                        message: "We can't find product with id: "+req.body.Product_ID+" and user with id: "+req.body.User_ID
                    })
                }
            })

        }
    }).catch(err => {
        if (err) {
            return res.send({
                message: "We can't find product with id: "+req.body.Product_ID+" and user with id: "+req.body.User_ID
            })
        }
    })

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

exports.delete = (req, res) => {
    Order.findByIdAndRemove(req.body.orderId)
        .then(order => {
            if (!order) {
                return res.send({
                    message: "We can't find product with id: " + req.body.orderId
                });
            }
            res.send({messageOK: "Order deleted successfully!"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.send({
                message: "There is no order with id: " + req.body.orderId
            });
        }
        return res.send({
            message: "We can't delete order with id: " + req.body.orderId
        });
    });
}