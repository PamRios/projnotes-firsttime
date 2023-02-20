var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet=["✨", "🎃", "🎨"];
  let icon = iconSet[Math.floor(Math.random()*3)];
  res.render('index', { title: 'DWPII-2023A', icon}); //render permite renderizar una plantilla los datos se especifican en formato json
}); //invoca una vista -> se genera por un template engiene handelbars (hbs) 

module.exports = router;

// ('index', { title: 'Express' }) view model html puro