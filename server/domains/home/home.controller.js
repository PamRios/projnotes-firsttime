// Actions methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  const iconSet = ['🏵', '🐱‍🏍', '🐱‍👤', '🥐', '🎨', '🧸', '🧶', '🐶', '💖'];
  const icon = iconSet[Math.floor(Math.random() * iconSet.length)];
  res.render('home/homeView', { icon });
  // Sin slash (/), sin extensión, cuidado con los nombres de las vistas
};

// GET  "/index"
const about = (req, res) => {
  res.render('home/aboutView');
  // res.send('🛠 UNDER CONSTRUCTION: GET /about');
};

// Controlador Home
export default {
  home,
  about,
};
