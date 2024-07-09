const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CourseController");

router.get("/tao-khoa-hoc", coursesController.create);
router.post("/luu-tru", coursesController.store);
router.get("/:id/sua", coursesController.edit);
router.put("/:id", coursesController.update);
router.get("/:slug", coursesController.show);

module.exports = router;
