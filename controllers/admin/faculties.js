const Pages = require('../../models/page');
const Faculties = require('../../models/faculty');

module.exports.index = async (req, res) => {
    const faculties = await Faculties.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('faculties/index', { faculties });
};
module.exports.renderNewForm = (req, res) => {
    res.render('faculties/new');
};
module.exports.createFaculty = async (req, res) => {
    const newFaculty = new Faculties(req.body.faculty);
    const page = await Pages.findOne({centreCode: `${req.body.faculty.centreCode}`});
    page.faculties.push(newFaculty);
    await newFaculty.save();
    await page.save();
    res.redirect(`/admin/faculties/${newFaculty._id}`);
};
module.exports.showFaculty = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculties.findById(id)
    let name = '';
    if(faculty.centreCode === 'cfdt'){ name = 'Fashion & Design Technology'; }
    else if(faculty.centreCode === 'cft'){ name = 'Food Technology' }
    else if(faculty.centreCode === 'cms'){ name = 'Media Studies' }
    else if(faculty.centreCode === 'cce'){ name = 'Computer Education' }
    res.render('faculties/show', { faculty, name })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculties.findById(id);
    let n = '0';
    if(faculty.centreCode === 'cce'){ n = '1' }
    else if(faculty.centreCode === 'cfdt'){ n = '2' }
    else if(faculty.centreCode === 'cft'){ n = '3' }
    else if(faculty.centreCode === 'cms'){ n = '4' }
    res.render('faculties/edit', { faculty, n })
};
module.exports.updateFaculty = async (req, res) => {
    const { id } = req.params;
    const faculty = await Faculties.findByIdAndUpdate(id, {...req.body.faculty});
    res.redirect(`/admin/faculties/${faculty._id}`);
};
module.exports.deleteFaculty = async (req, res) => {
    const { id } = req.params;
    const deleteFaculty = await Faculties.findByIdAndDelete(id);
    res.redirect('/admin/faculties');
};
