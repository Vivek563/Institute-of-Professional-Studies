const Pages = require('../models/page');

module.exports.index = async (req, res) => {
    const pages = await Pages.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('pages/index', { pages });
};
module.exports.renderNewForm = (req, res) => {
    res.render('pages/new');
};
module.exports.createPage = async (req, res) => {
    const newPage = new Pages(req.body.page);
    await newPage.save();
    res.redirect(`/pages/${newPage._id}`);
};
module.exports.showPage = async (req, res) => {
    const { id } = req.params;
    const page = await Pages.findById(id)
    res.render('pages/show', { page })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const page = await Pages.findById(id);
    res.render('pages/edit', { page })
};
module.exports.updatePage = async (req, res) => {
    const { id } = req.params;
    const page = await Pages.findByIdAndUpdate(id, {...req.body.page});
    res.redirect(`/pages/${page._id}`);
};
module.exports.deletePage = async (req, res) => {
    const { id } = req.params;
    const deletePage = await Pages.findByIdAndDelete(id);
    res.redirect('/pages');
};
