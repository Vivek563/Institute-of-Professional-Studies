const Pages = require('../../models/page');
const Staffs = require('../../models/staff');

module.exports.index = async (req, res) => {
    const staffs = await Staffs.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('staffs/index', { staffs });
};
module.exports.renderNewForm = (req, res) => {
    res.render('staffs/new');
};
module.exports.createStaff = async (req, res) => {
    const newStaff = new Staffs(req.body.staff);
    const page = await Pages.findOne({centreCode: `${req.body.staff.centreCode}`});
    // page.staffs.push(newStaff);
    await newStaff.save();
    // await page.save();
    res.redirect(`/admin/staffs/${newStaff._id}`);
};
module.exports.showStaff = async (req, res) => {
    const { id } = req.params;
    const staff = await Staffs.findById(id)
    let name = '';
    if(staff.centreCode === 'cfdt'){ name = 'Fashion & Design Technology'; }
    else if(staff.centreCode === 'cft'){ name = 'Food Technology' }
    else if(staff.centreCode === 'cms'){ name = 'Media Studies' }
    else if(staff.centreCode === 'cce'){ name = 'Computer Education' }
    res.render('staffs/show', { staff, name })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const staff = await Staffs.findById(id);
    let n = '0';
    if(staff.centreCode === 'cce'){ n = '1' }
    else if(staff.centreCode === 'cfdt'){ n = '2' }
    else if(staff.centreCode === 'cft'){ n = '3' }
    else if(staff.centreCode === 'cms'){ n = '4' }
    res.render('staffs/edit', { staff, n })
};
module.exports.updateStaff = async (req, res) => {
    const { id } = req.params;
    const staff = await Staffs.findByIdAndUpdate(id, {...req.body.staff});
    res.redirect(`/admin/staffs/${staff._id}`);
};
module.exports.deleteStaff = async (req, res) => {
    const { id } = req.params;
    const deleteStaff = await Staffs.findByIdAndDelete(id);
    res.redirect('/admin/staffs');
};
