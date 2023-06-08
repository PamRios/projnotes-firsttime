import express from 'express';

const { Router } = express;
// let router = express.Router();
// instancia que se encargara de asociar un verbo de petición de un recurso
const router = Router();
/* GET users listing. */
router.get('/', (req, res) => {
  // verbo+url
  res.send('respond with a resource');
});

// module.exports = router;
export default router;
