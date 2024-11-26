const express = require("express");
const router = express.Router();
const filmController = require("../controllers/film");

router.get("/", filmController.cget);
router.post("/", filmController.post);
router.get("/:id", filmController.get);
router.patch("/:id", filmController.patch);
router.delete("/:id", filmController.delete);

module.exports = router;