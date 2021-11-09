class NewsController{

    index(req, res) {
        res.render('news')
    };

    show(req, res) {
        res.send('Detailllllllll');
    };
};

module.exports = new NewsController;
