const Product = require('../models/products.model.js');

exports.create = (req, res) => {

    if (!req.body.Brand || !req.body.Model || !req.body.Price) {
        return res.status(400).send({
            message: "Pola nie moga byc pute, uzupelnij Marke, Model oraz Cene"
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
            message: err.message || "Wystapil jakis blad podczas tworzenia produktow!"
        });
    });
};

exports.findAll = (req, res) => {
    Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas pobierania produktow!"
        });
    });

};

exports.findOneById = (req, res) => {
    Product.findById(req.params.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Nie znaleziono produktu z podanym ID : " + req.params.productId
                });
            }
            res.send(product);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Nie znaleziono produktu z podanym ID : " + req.params.productId
            });
        }
        return res.status(500).send({
            message: "Nie znaleziono! ID: " + req.params.productId
        });
    });
};

exports.findAllByBrand = (req, res) => {

    Product.find({Brand: req.params.Brand})
        .then(products => {
            res.send(products);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas pobierania produktow!"
        });
    });

};

exports.update = (req, res) => {

    if (!req.body.Brand || !req.body.Model || !req.body.Price) {
        return res.status(400).send({
            message: "Dane uzytkownika nie moga byc puste!"
        });
    }

    Product.findByIdAndUpdate(req.params.productId, {
        Brand: req.body.Brand,
        Model: req.body.Model,
        Price: req.body.Price
    }, {new: true})
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Nie znaleziono produktu z podanym ID : " + req.params.productId
                });
            }
            res.send(product);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Nie znaleziono produktu z podanym ID : " + req.params.productId
            });
        }
        return res.status(500).send({
            message: "Blad podczas aktualizacji! ID: " + req.params.productId
        });
    });
};

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Nie znaleziono produktu z podanym ID : " + req.params.productId
                });
            }
            res.send({message: "Produkt usunieto poprawnie"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Nie istnieje produkt o podanym ID : " + req.params.productId
            });
        }
        return res.status(500).send({
            message: "NIe mozna usunac produktu podanym ID : " + req.params.productId
        });
    });

};