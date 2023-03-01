var express = require('express'); //importing express library
//creating a router instance
var router = express.Router();

//creating the route 
router.get('/author', (req, res)=>/*Callback */{ /*se ejecuta hasta que alguien haga una petición a /author */
res.json({
    "name": "Pam",
    "Lastname": "Rios",
    "COD mobile": "00Thunder76",
    "Occupation": "Student"   
});
});

//Exporting the router
module.exports = router;
/*
function(obj1, obj2, obj3 maybe
function(petición, respuesta)
function(req, res)
(req, res)=>{ == function(req, res) {*/