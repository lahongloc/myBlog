class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/slugs
    details(req, res) {
        res.render('details');
    }
}

module.exports = new NewsController();
