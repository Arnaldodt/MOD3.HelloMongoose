const exp = require("express");
const router = exp.Router();

const controller = require("../controllers/controller")

router.get('/', (req, res) => {
    controller.User(req, res);
})

router.post('/usuarios', (req, res) =>{
    controller.Crear(req, res);
})

module.exports = router;