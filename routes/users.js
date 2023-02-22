var express = require('express');
var router = express.Router(); //instancia que se encargara de asociar un verbo de petición de un recurso

/* GET users listing. */
router.get('/'/*recurso raíz */, function(req, res, next) { //verbo+url
  res.send('respond with a resource');
});

module.exports = router;
