const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event");

router.get("/", eventController.cget);
router.post("/", eventController.post);
router.get("/:id", eventController.get);
router.patch("/:id", eventController.patch);
router.delete("/:id", eventController.delete);

module.exports = router; 
