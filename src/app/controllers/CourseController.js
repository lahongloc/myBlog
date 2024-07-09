const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongose");

class SiteController {
	// [GET] /khoa-hoc/:slug
	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then((course) => {
				res.render("courses/show", {
					course: mongooseToObject(course),
				});
			})
			.catch(next);
	}

	// [GET] /khoa-hoc/tao-khoa-hoc
	create(req, res, next) {
		res.render("courses/create");
	}

	// [POST] /khoa-hoc/luu-tru
	store(req, res, next) {
		// res.json(req.body);
		const formData = req.body;
		formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
		const course = new Course(formData);
		course.save().then(() => res.redirect(`/`));
		// course.save().then(() => res.redirect(`/khoa-hoc/${formData.slug}`));
	}

	// [GET] /khoa-hoc/:id/sua
	edit(req, res, next) {
		Course.findById(req.params.id)
			.then((course) =>
				res.render("courses/edit", {
					course: mongooseToObject(course),
				}),
			)
			.catch(next);
	}

	// [PUT] /khoa-hoc/:id
	update(req, res, next) {
		Course.updateOne({ _id: req.params.id }, req.body)
			.then(() => res.redirect("/luu-tru/khoa-hoc-cua-toi"))
			.catch(next);
	}
}
module.exports = new SiteController();
