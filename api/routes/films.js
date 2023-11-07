const express = require("express");
const FilmsController = require("../controllers/films");
const router = express.Router();

router.get("/:mediaType/:filmId", FilmsController.searchById);
router.get("/:filmName", FilmsController.multiSearchByName);
router.get("/movie/:filmId", FilmsController.searchMovieById);
router.get("/tv/:filmId", FilmsController.searchTvById);
router.get("/trending/all/day", FilmsController.searchTvTrending);

module.exports = router;
