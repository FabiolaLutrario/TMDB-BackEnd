const express = require("express");
const FilmsController = require("../controllers/films");
const router = express.Router();

router.get("/:mediaType/:filmId", FilmsController.searchById);
router.get("/:filmName", FilmsController.multiSearchByName);
router.get("/movie/:filmId", FilmsController.searchMovieById);
router.get("/tv/:filmId", FilmsController.searchTvById);

module.exports = router;
