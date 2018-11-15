const User = require('../models/user.model.js');
/*
robienie rezerwacji:
cala baza, sprawdzanie magazu, dany uzytkownik robi rezerwacje
 */

exports.create = (req, res) => {

    if (!req.body.Surname || !req.body.Name) { //imie tez nie moze byc puste
        return res.status(400).send({
            message: "Uzupelnij imie oraz nazwisko!"
        });
    }

    const user = new User({
        Name: req.body.Name,
        Surname: req.body.Surname,
    });

    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas tworzenia uzytkownika!"
        });
    });
};

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

exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Nie znaleziono uzytkownika z ID : " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Nie znaleziono uzytkownika z ID : " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Nie znaleziono! ID: " + req.params.userId
        });
    });

};


exports.update = (req, res) => {

    if (!req.body.Surname || !req.body.Name) {
        return res.status(400).send({
            message: "Dane uzytkownika nie moga byc puste!"
        });
    }


    User.findByIdAndUpdate(req.params.userId, {
        Name: req.body.Name,
        Surname: req.body.Surname
    }, {new: true})
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Nie znaleziono uzytkownika z ID : " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Nie znaleziono uzytkownika z ID : " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Blad podczas aktualizacji! ID: " + req.params.userId
        });
    });
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Nie znaleziono uzytkownika z ID : " + req.params.userId
                });
            }
            res.send({message: "Uzytkownik usuniety poprawnie"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Nie znaleziono uzytkownika z ID :  " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Nie mozna uzunac uzytkownika z ID : " + req.params.userId
        });
    });

};