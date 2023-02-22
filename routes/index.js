var express = require('express');
const { render } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet=["✨", "🎃", "🎨"];
  let icon = iconSet[Math.floor(Math.random()*3)];
  res.render('index', { title: 'DWPII-2023A', icon}); //render permite renderizar una plantilla los datos se especifican en formato json
}); //invoca una vista -> se genera por un template engiene handelbars (hbs) 

router.get('/author', (req, res)=>{
  let author= {
    "Name": "Pam",
    "Lastname": "Rios",
    "COD": "00Thunder76",
    "Occupation": "Student"
  };

  //Sending the view-model to be rendered by 
  res.render('author', author);

});

module.exports = router;

// ('index', { title: 'Express' }) view model html puro