const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRoute = require("./courses");
const storeRoute = require("./store");

function route(app) {
	app.use("/news", newsRouter);
	app.use("/khoa-hoc", courseRoute);
	app.use("/luu-tru", storeRoute);
	app.use("/", siteRouter);
}

module.exports = route;
