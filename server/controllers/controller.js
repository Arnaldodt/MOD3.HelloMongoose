const User = require("../models/modelo")

module.exports = {

    User : (req, res) => {
        User.find()
        .then(data => { console.log(data);res.render("index", {users: data}) })
        .catch(err => res.json(err));
    },

    Crear : (req, res) => {
        const user = new User();
        user.nombre = req.body.nombre;
        user.edad = req.body.edad;

        user.save()
            .then(newUserData => console.log('user created: ', newUserData))
            .catch(err => console.log(err));

        res.redirect('/');
    }
}