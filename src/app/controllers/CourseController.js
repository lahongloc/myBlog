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
		req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
		const course = new Course(req.body);
		course
			.save()
			.then(() => res.redirect(`/`))
			.catch(next);
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

	// [DELETE] /khoa-hoc/:id/
	// SOFT DELETION
	delete(req, res, next) {
		Course.delete({ _id: req.params.id })
			.then(() => res.redirect("back"))
			.catch(next);
	}

	// [PATCH] /khoa-hoc/:id/khoi-phucs
	restore(req, res, next) {
		Course.restore({ _id: req.params.id })
			.then(() => res.redirect("back"))
			.catch(next);
	}

	// [DELETE] /khoa-hoc/:id/xoa-vinh-vien
	forceDelete(req, res, next) {
		Course.deleteOne({ _id: req.params.id })
			.then(() => res.redirect("back"))
			.catch(next);
	}

	// [POST] /khoa-hoc/-xu-ly-xoa-nhieu
	deleteMany(req, res, next) {
		switch (req.body.action) {
			case "delete":
				Course.delete({ _id: { $in: req.body.courseIds } })
					.then(() => res.redirect("back"))
					.catch(next);
				break;
			default:
				res.json({ message: "action is invalid!" });
		}
	}
}
module.exports = new SiteController();
