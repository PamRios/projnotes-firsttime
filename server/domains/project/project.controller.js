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

// Controlador Project
export default {
  showDashboard,
  add,
};
