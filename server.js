const express = require("express");
const BBDD = require("./server/config/mongoose");
const bodyparse = require("body-parser");

const app = express();
app.use(bodyparse.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',__dirname + '/client/views');

const router = require("./server/config/routers");
app.use(router);

app.listen(8000, ()=>{
    console.log("Servidor escuchando el puerto 8000");
});