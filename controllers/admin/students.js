const Pages = require('../../models/page');
const Students = require('../../models/student');

module.exports.index = async (req, res) => {
    const students = await Students.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('students/index', { students });
};
module.exports.renderNewForm = (req, res) => {
    res.render('students/new');
};
module.exports.createStudent = async (req, res) => {
    const newStudent = new Students(req.body.student);
    const page = await Pages.findOne({centreCode: `${req.body.student.centreCode}`});
    // page.students.push(newStudent);
    await newStudent.save();
    // await page.save();
    res.redirect(`/admin/students/${newStudent._id}`);
};
module.exports.showStudent = async (req, res) => {
    const { id } = req.params;
    const student = await Students.findById(id)
    let name = '';
    if(student.centreCode === 'cfdt'){ name = 'Fashion & Design Technology'; }
    else if(student.centreCode === 'cft'){ name = 'Food Technology' }
    else if(student.centreCode === 'cms'){ name = 'Media Studies' }
    else if(student.centreCode === 'cce'){ name = 'Computer Education' }
    res.render('students/show', { student, name })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const student = await Students.findById(id);
    let n = '0';
    if(student.centreCode === 'cce'){ n = '1' }
    else if(student.centreCode === 'cfdt'){ n = '2' }
    else if(student.centreCode === 'cft'){ n = '3' }
    else if(student.centreCode === 'cms'){ n = '4' }
    res.render('students/edit', { student, n })
};
module.exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const student = await Students.findByIdAndUpdate(id, {...req.body.student});
    res.redirect(`/admin/students/${student._id}`);
};
module.exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    const deleteStudent = await Students.findByIdAndDelete(id);
    res.redirect('/admin/students');
};
