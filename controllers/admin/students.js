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
    await newStudent.save();
    res.redirect(`/admin/students/${newStudent._id}`);
};
module.exports.showStudent = async (req, res) => {
    const { id } = req.params;
    const student = await Students.findById(id)
    res.render('students/show', { student })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const student = await Students.findById(id);
    res.render('students/edit', { student })
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
