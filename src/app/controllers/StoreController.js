const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongose");

class storeController {
	// [GET] /luu-tru/khoa-hoc-cua-toi
	myCourses(req, res, next) {
		Course.find({})
			.then((courses) =>
				res.render("stores/my-courses", {
					courses: multipleMongooseToObject(courses),
				}),
			)
			.catch(next);
	}

	// [GET] /luu-tru/bai-viet-cua-toi
	myPosts(req, res, next) {
		res.send("my posts!");
	}
}

module.exports = new storeController();
