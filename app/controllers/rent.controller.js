const User = require('../models/rent.model.js');
/*
robienie rezerwacji:
cala baza, sprawdzanie magazu, dany uzytkownik robi rezerwacje
 */
// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if(!req.body.Surname) { //imie tez nie moze byc puste
        return res.status(400).send({
            message: "Imie nie moze byc puste!"
        });
    }

    // Create a User
    const user = new User({
        Name: req.body.Name || "Jan",
        Surname: req.body.Surname || "Kowalski",
    });

    // Save User in the database
    user.save()
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
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas pobierania uzytkownikow!"
        });
    });

};

// Find a single note with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User z nie znaleziony! ID: " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User z nie znaleziony! ID: " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Nie znaleziono! ID: " + req.params.userId
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