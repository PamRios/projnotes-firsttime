import express from 'express';

const { Router } = express;
/* const render  = require('../app');
let router = express.Router(); */
const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
  const iconSet = ['✨', '🎃', '🎨'];
  const icon = iconSet[Math.floor(Math.random() * 3)];
  res.render('index', { title: 'DWPII-2023A', icon }); // render permite renderizar una plantilla los datos se especifican en formato json
}); // invoca una vista -> se genera por un template engiene handelbars (hbs)

router.get('/author', (req, res) => {
  const author = {
    ' name': 'Pam',
    ' Lastname': 'Rios G',
    'COD mobile': '00Thunder76',
    ' Occupation': 'Student',
  };

  // Sending the view-model to be rendered by
  res.render('author', author);
});

// module.exports = router;
export default router;

// ('index', { title: 'Express' }) view model html puro
