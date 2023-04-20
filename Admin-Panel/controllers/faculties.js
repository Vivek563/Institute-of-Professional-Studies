const Faculties = require('../models/faculty');

module.exports.index = async (req, res) => {
    const faculties = await Faculties.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('faculties/index', { faculties });
};
module.exports.renderNewForm = (req, res) => {
    res.render('faculties/new');
};
module.exports.createFaculty = async (req, res) => {
    const newFaculty = new Faculties(req.body.faculty);
    await newFaculty.save();
    res.redirect(`/faculties/${newFaculty._id}`);
};
module.exports.showFaculty = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculties.findById(id)
    res.render('faculties/show', { faculty })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculties.findById(id);
    res.render('faculties/edit', { faculty })
};
module.exports.updateFaculty = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculties.findByIdAndUpdate(id, {...req.body.faculty});
    res.redirect(`/faculties/${faculty._id}`);
};
module.exports.deleteFaculty = async (req, res) => {
    const { id } = req.params;
    const deleteFaculty = await Faculties.findByIdAndDelete(id);
    res.redirect('/faculties');
};
