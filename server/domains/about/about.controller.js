// Actions methods
// GET "/"
// GET "/index"
const about = (req, res) => {
  res.send('🛠 si de nosotros quieres saber un bailde debes hacer; GET /about');
};

// Controlador Home
export default {
  about,
};
