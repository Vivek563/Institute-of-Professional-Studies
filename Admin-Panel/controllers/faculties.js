const Pages = require('../models/page');
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
    const page = await Pages.findOne({code: `${req.body.faculty.code}`});
    page.faculties.push(newFaculty);
    await newFaculty.save();
    await page.save();
    res.redirect(`/faculties/${newFaculty._id}`);
};
module.exports.showFaculty = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculties.findById(id)
    let name = '';
    if(faculty.code === 'cfdt'){ name = 'Fashion & Design Technology'; }
    else if(faculty.code === 'cft'){ name = 'Food Technology' }
    else if(faculty.code === 'cms'){ name = 'Media Studies' }
    else if(faculty.code === 'cce'){ name = 'Computer Education' }
    res.render('faculties/show', { faculty, name })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculties.findById(id);
    let n = '0';
    if(faculty.code === 'cce'){ n = '1' }
    else if(faculty.code === 'cfdt'){ n = '2' }
    else if(faculty.code === 'cft'){ n = '3' }
    else if(faculty.code === 'cms'){ n = '4' }
    res.render('faculties/edit', { faculty, n })
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
