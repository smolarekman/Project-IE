const Product = require('../models/products.model.js');

exports.create = (req, res) => {
    if (!req.body.Brand || !req.body.Model || !req.body.Price) {
        return res.status(400).send({
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
        res.status(500).send({
            message: err.message || "Something went wrong during create product!"
        });
    });
};

exports.findAll = (req, res) => {
    Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong during download product!"
        });
    });
};

exports.findOneById = (req, res) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "We can't find product with id: " + req.body.productId
                });
            }
            res.send(product);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "We can't find product with id: " + req.body.productId
            });
        }
        return res.status(500).send({
            message: "We can't find id: " + req.body.productId
        });
    });

};

exports.findAllByBrand = (req, res) => {

    Product.find({Brand: req.query.Brand})
        .then(products => {
            res.send(products);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong during download product!"
        });
    });
};

exports.update = (req, res) => {

    if (Product.findById(req.query.productId)) {
        if (!req.body.Brand || !req.body.Model || !req.body.Price) {
            return res.status(400).send({
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
                return res.status(404).send({
                    message: "We can't find product with id: " + req.query.productId
                });
            }
            res.send(product);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "We can't find product with id: " + req.query.productId
            });
        }
        return res.status(500).send({
            message: "Something went wrong during update product with id: " + req.query.productId
        });
    });

};

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "We can't find product with id: " + req.body.productId
                });
            }
            res.send({message: "Product deleted successfully!"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "There is no product with id: " + req.body.productId
            });
        }
        return res.status(500).send({
            message: "We can't delete product with id: " + req.body.productId
        });
    });
};
