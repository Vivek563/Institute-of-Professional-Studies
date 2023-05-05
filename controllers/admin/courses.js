const Courses = require('../../models/course');

module.exports.index = async (req, res) => {
    const courses = await Courses.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('courses/index', { courses });
};
module.exports.renderNewForm = (req, res) => {
    res.render('courses/new');
};
module.exports.createCourse = async (req, res) => {
    const newCourse = new Courses(req.body.course);
    await newCourse.save();
    res.redirect(`/admin/courses/${newCourse._id}`);
};
module.exports.showCourse = async (req, res) => {
    const { id } = req.params;
    const course = await Courses.findById(id)
    res.render('courses/show', { course })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const course = await Courses.findById(id);
    res.render('courses/edit', { course })
};
module.exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = await Courses.findByIdAndUpdate(id, {...req.body.course});
    res.redirect(`/admin/courses/${course._id}`);
};
module.exports.deleteCourse = async (req, res) => {
    const { id } = req.params;
    const deleteCourse = await Courses.findByIdAndDelete(id);
    res.redirect('/admin/courses');
};
