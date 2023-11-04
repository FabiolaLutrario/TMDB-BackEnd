const express = require("express");
const FavoritesController = require("../controllers/favorites");
const router = express.Router();

router.post(
  "/addToFavorites/:filmId/:mediaType",
  FavoritesController.addToFavorites
);
router.get("/user/:userId", FavoritesController.getFavoritesByUser);
router.delete("/:filmId", FavoritesController.deleteByFilmId);

module.exports = router;
