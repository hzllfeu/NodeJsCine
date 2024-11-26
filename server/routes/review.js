const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviews");

router.get("/", reviewController.cget);
router.post("/", reviewController.post);
router.get("/:id", reviewController.get);
router.patch("/:id", reviewController.patch);
router.delete("/:id", reviewController.delete);

module.exports = router;