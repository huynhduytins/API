const controller = require("./../controllers/tourController");
const express = require("express");
const router = express.Router();

router.route("/").get(controller.getAllTour).post(controller.createTour);

router
  .route("/:id")
  .get(controller.getTour)
  .patch(controller.updateTour)
  .delete(controller.deleteTour);

module.exports = router;
