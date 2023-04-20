const News = require('../models/News');

module.exports.index = async (req, res) => {
    const news = await News.find({}).limit(6).sort({updatedAt: 'desc'})
    res.render('news/index', { news });
};
module.exports.renderNewForm = (req, res) => {
    res.render('news/new');
};
module.exports.createNews = async (req, res) => {
    const newNews = new News(req.body.aNews);
    await newNews.save();
    res.redirect(`/news/${newNews._id}`);
};
module.exports.showNews = async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findById(id)
    res.render('news/show', { aNews })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findById(id);
    res.render('news/edit', { aNews })
};
module.exports.updateNews = async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findByIdAndUpdate(id, {...req.body.aNews});
    res.redirect(`/news/${aNews._id}`);
};
module.exports.deleteNews = async (req, res) => {
    const { id } = req.params;
    const deleteNews = await News.findByIdAndDelete(id);
    res.redirect('/news');
};
