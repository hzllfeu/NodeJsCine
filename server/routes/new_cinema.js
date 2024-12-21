const express = require("express");
const router = express.Router();
const cinemaController = require("../controllers/new_cinema"); 

router.get("/", cinemaController.cget);
router.post("/", cinemaController.post);
router.get("/:id", cinemaController.get);
router.patch("/:id", cinemaController.patch);
router.delete("/:id", cinemaController.delete);

module.exports = router;