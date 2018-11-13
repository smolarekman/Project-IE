const Product = require('../models/products.model.js');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if(!req.body.Brand || !req.body.Model ||!req.body.Price) {
        return res.status(400).send({
            message: "Pola nie moga byc pute, uzupelnij Marke, Model oraz Cene"
        });
    }

    // Create a User
    const product = new Product({
        Brand: req.body.Brand ,
        Model: req.body.Model ,
        Price: req.body.Price
    });

    // Save User in the database
    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas tworzenia!"
        });
    });
};

// Retrieve and return all users from the database.
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

// Find a single product with a Brand name (to edit)
exports.findOne = (req, res) => {
    var brand=req.params.Brand;

    // Product.findOne({Brand: brand})
    //     .then(product => {
    //         if(!product) {
    //             return res.status(404).send({
    //                 message: "User z nie znaleziony! ID: " + req.params.Brand
    //             });
    //         }
    //         res.send(product);
    //     }).catch(err => {
    //     if(err.kind === 'ObjectId') {
    //         return res.status(404).send({
    //             message: "User z nie znaleziony! ID: " + req.params.Brand
    //         });
    //     }
    //     return res.status(500).send({
    //         message: "Nie znaleziono! ID: " + req.params.Brand
    //     });
    // });

    Product.find({Brand: brand})
        .then(products => {
            res.send(products);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas pobierania produktow!"
        });
    });

};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
// Validate Request
    if(!req.body.Surname) {
        return res.status(400).send({
            message: "Dane uzytkownika nie moga byc puste!"
        });
    }

    // Find note and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        Name: req.body.Name || "Jan",
        Surname: req.body.Surname
    }, {new: true})
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "Nie znaleziono usera z ID: " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Nie znaleziono usera z ID: " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Blad podczas aktualizacji! ID: " + req.params.userId
        });
    });
};

// Delete a user with the specified noteId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send({message: "User deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });

};