const router = require('express').Router();

// Controllers
const FilmsController = require("../app/controllers/filmsController");

// Films
router.get('/films', FilmsController.index);
router.get('/films/:id', FilmsController.show);
router.post('/films', FilmsController.store);

export default router;