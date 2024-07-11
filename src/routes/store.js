const express = require("express");
const router = express.Router();

const storeController = require("../app/controllers/StoreController");

router.get("/khoa-hoc-cua-toi", storeController.myCourses);
router.get("/bai-viet-cua-toi", storeController.myPosts);
router.get("/thung-rac", storeController.trash);

module.exports = router;
