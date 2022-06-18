var db = require("../database/models");
var hasher = require("bcryptjs");
var op = db.Sequelize.Op;


const controllers = {
    indexAll: function (req, res) {
        db.Product.findAll({
            order: [['id', 'DESC']],

        } )
            .then(function (products) {
                res.render('index', { products });
            })
            .catch(function (error) {
                res.send(error)
            })
    },

    login: function (req, res) {
        res.render('login');
    },

    access: function (req, res, next) {
        db.User.findOne({ where: { email: req.body.mail } })
            .then(function (user) {
                if (!user) throw Error('No se encontró al usuario.')
                if (hasher.compareSync(req.body.password, user.Password)) {
                    req.session.user = user;
                    if (req.body.rememberme) {
                        res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 7 })
                    }
                    res.redirect('/');
                } else {
                    throw Error('Información incorrecta')
                }
            })
            .catch(function (error) {
                next(error)
            })
    },

    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
    },

    register: function (req, res) {
        res.render('register');
    },

    store: async function (req, res) {
        try {
            if (!req.body.username) { throw Error('Campo de nombre de usuario vacío.') }
            if (!req.body.email) { throw Error('Campo de email vacío.') }
            if (req.body.Password.length < 3) { throw Error('Contraseña muy corta.') }
            if (!req.body.Password) { throw Error('Campo de contraseña vacío') }
            if (!req.body.name) { throw Error('Campo de nombre completo vacío') }
            if (!req.body.surname) { throw Error('Campo de apellido vacío') }
            if (!req.body.DNI) { throw Error('Campo de DNI vacío') }  
            const email = await db.User.findOne({ where: { email: req.body.email } })
            if (email) { throw Error('Email ya está en uso.') } 

            const user = db.User.findOne({ where: { username: req.body.username } })
            if (user) { throw Error('Nombre de usuario ya está en uso.') }

        } catch (error) {
            res.render('register', { error: error.message });
            return;
        }
        const hashedPassword = hasher.hashSync(req.body.Password, 10);
        db.User.create({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            birthdate: req.body.birthdate,
            gender: req.body.gender,
            DNI: req.body.DNI,
            profilephoto: req.body.profilephoto,
            Password: hashedPassword,
        })
            .then(function () {
                res.redirect('/login/');
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    results: function (req, res, next) {
        db.Product.findAll({
            where: {
                [op.or]: [
                    { modelo: { [op.like]: "%" + req.query.criteria + "%" } },
                    { marca: { [op.like]: "%" + req.query.criteria + "%" } }
                ]
            },
        })

            .then(function (product) {
                if (product.length < 1) { throw Error('No hay resultados para su búsqueda') }
                else {
                    res.render('searchResults', { product });
                }
            })
            .catch(function (error) {
                res.render('searchResults', { product:[], error });
            });
    },
}

module.exports = controllers;


