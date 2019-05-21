const Product = require('../models/products.model.js');

exports.create = (req, res) => {
    if (!req.body.Brand || !req.body.Model || !req.body.Price) {
        return res.send({
            message: "Fill orders, model and price field!"
        });
    }

    const product = new Product({
        Brand: req.body.Brand,
        Model: req.body.Model,
        Price: req.body.Price
    });

    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.send({
            message: err.message || "Something went wrong during create product!"
        });
    });
};

exports.findAll = (req, res) => {
    Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
        res.send({
            message: err.message || "Something went wrong during download product!"
        });
    });
};

exports.findOneById = (req, res) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.send({
                    message: "We can't find product with id: " + req.body.productId
                });
            }
            res.send(product);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.send({
                message: "We can't find product with id: " + req.body.productId
            });
        }
        return res.send({
            message: "We can't find id: " + req.body.productId
        });
    });

};

exports.findAllByBrand = (req, res) => {

    Product.find({Brand: req.query.Brand}).then(product => {
        if (product.length == 0) {
            return res.send({
                message: "We can't find product of: " + req.query.Brand
            })
        }
    });

    Product.find({Brand: req.query.Brand})
        .then(products => {
            res.send(products);
        }).catch(err => {
        res.send({
            message: err.message || "Something went wrong during download product!"
        });
    });
};

exports.update = (req, res) => {

    if (Product.findById(req.query.productId)) {
        if (!req.body.Brand || !req.body.Model || !req.body.Price) {
            return res.send({
                message: "Fill orders, model and price field!"
            });
        }
    }

    Product.findByIdAndUpdate(req.query.productId, {
        Brand: req.body.Brand,
        Model: req.body.Model,
        Price: req.body.Price
    }, {new: true})
        .then(product => {
            if (!product) {
                return res.send({
                    message: "We can't find product with id: " + req.query.productId
                });
            }
            res.send(product);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.send({
                message: "We can't find product with id: " + req.query.productId
            });
        }
        return res.send({
            message: "Something went wrong during update product with id: " + req.query.productId
        });
    });

};

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.body.productId)
        .then(product => {
            if (!product) {
                return res.send({
                    message: "We can't find product with id: " + req.body.productId
                });
            }
            res.send({messageOK: "Product deleted successfully!"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.send({
                message: "There is no product with id: " + req.body.productId
            });
        }
        return res.send({
            message: "We can't delete product with id: " + req.body.productId
        });
    });
};
