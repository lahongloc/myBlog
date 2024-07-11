const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongose");

class storeController {
	// [GET] /luu-tru/khoa-hoc-cua-toi
	myCourses(req, res, next) {
		// res.json(res.locals._sort);
		let courseQuery = Course.find({});

		if (req.query.hasOwnProperty("_sort")) {
			courseQuery = courseQuery.sort({
				[req.query.column]: req.query.type,
			});
		}

		Promise.all([
			courseQuery,
			Course.countDocumentsWithDeleted({ deleted: true }),
		])
			.then(([courses, deletedCourses]) =>
				res.render("stores/my-courses", {
					deletedCourses,
					courses: multipleMongooseToObject(courses),
				}),
			)
			.catch(next);
	}

	// [GET] /luu-tru/bai-viet-cua-toi
	myPosts(req, res, next) {
		res.send("my posts!");
	}

	// [GET] /luu-tru/thung-rac
	trash(req, res, next) {
		Course.findWithDeleted({ deleted: true })
			.then((courses) =>
				res.render("stores/trash", {
					courses: multipleMongooseToObject(courses),
				}),
			)
			.catch(next);
	}
}

module.exports = new storeController();
