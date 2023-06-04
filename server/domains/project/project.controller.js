// Actions methods
// GET "/project"
const showDashboard = (req, res) => {
  res.send('🛠 UNDER CONSTRCTION: GET /project');
};

// Actions methods
// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// POST /project/add
const addPost = (req, res) => {
  // Extrayendo la información
  // del formulario
  const { name, description } = req.body;
  // Regresando al cliente la información recabada
  res.status(200).json({
    name,
    description,
  });
};

// Controlador Project
export default {
  showDashboard,
  add,
  addPost,
};
