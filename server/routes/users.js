let express = require('express');
let router = express.Router(); //instancia que se encargara de asociar un verbo de petición de un recurso

/* GET users listing. */
router.get('/'/*recurso raíz */, (req, res, next) => { //verbo+url
  res.send('respond with a resource');
});

module.exports = router;
