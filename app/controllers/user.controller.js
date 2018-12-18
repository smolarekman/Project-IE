const User = require('../models/user.model.js');

exports.create = (req, res) => {

    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: req.body.password,
        passwordConf: req.body.passwordConf
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


exports.findAllBySur = (req, res) => {

    User.find({surname: req.params.surname})
        .then(users => {
            res.send(users);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Wystapil jakis blad podczas pobierania !"
        });
    });
};

exports.update = (req, res) => {

    if (!req.body.surname || !req.body.name) {
        return res.status(400).send({
            message: "Dane uzytkownika nie moga byc puste!"
        });
    }

    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        surname: req.body.surname
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

exports.delete1 = (req, res) => {
    // User.findOneAndRemove({surname: req.params.surname}, function (err, user) {
    //     user.remove();
    // }).then(res.send({message: "Ok"})).catch(err => {
    //     return res.send({message: "ERROR"})
    // })

    User.findOneAndDelete({surname:req.params.userId})
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Nie znaleziono uzytkownika1 z ID : "
                });
            }
            res.send({message: "Uzytkownik usuniety poprawnie"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Nie znaleziono uzytkownika2 z ID :  "
            });
        }
        return res.status(500).send({
            message: "Nie mozna uzunac uzytkownika3 z ID : "
        });
    });

};