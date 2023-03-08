//let express = require('express'); //importing express library
import express from 'express';
//creating a router instance
//let router = express.Router();
const {Router} = express;
const router = Router();

//creating the route 
router.get('/author', (req, res)=>/*Callback */{ /*se ejecuta hasta que alguien haga una petición a /author */
res.json({
    "name": "Pam",
    "Lastname": "Rios G",
    "COD mobile": "00Thunder76",
    "Occupation": "Student"   
});
});

//Exporting the router
//module.exports = router;
export default router;
/*
function(obj1, obj2, obj3 maybe
function(petición, respuesta)
function(req, res)
(req, res)=>{ == function(req, res) {*/