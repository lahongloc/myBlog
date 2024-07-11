const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CourseController");

router.get("/tao-khoa-hoc", coursesController.create);
router.post("/luu-tru", coursesController.store);
router.post("/xu-ly-xoa-nhieu", coursesController.deleteMany);
router.get("/:id/sua", coursesController.edit);
router.put("/:id", coursesController.update);
router.delete("/:id", coursesController.delete);
router.patch("/:id/khoi-phuc", coursesController.restore);
router.delete("/:id/xoa-vinh-vien", coursesController.forceDelete);
router.get("/:slug", coursesController.show);

module.exports = router;
