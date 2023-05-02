const NavbarItems = require('../../models/navbarItem');

module.exports.index = async (req, res) => {
    const navbarItems = await NavbarItems.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('navbarItems/index', { navbarItems });
};
module.exports.renderNewForm = (req, res) => {
    res.render('navbarItems/new', {limit: 4});
};
module.exports.createNavbarItem = async (req, res) => {
    const newNavbarItem = new NavbarItems(req.body.navbarItem);
    await newNavbarItem.save();
    res.redirect(`/admin/navbarItems/${newNavbarItem._id}`);
};
module.exports.showNavbarItem = async (req, res) => {
    const { id } = req.params;
    const navbarItem = await NavbarItems.findById(id)
    res.render('navbarItems/show', { navbarItem })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const navbarItem = await NavbarItems.findById(id);
    res.render('navbarItems/edit', { navbarItem, limit: 2 })
};
module.exports.updateNavbarItem = async (req, res) => {
    const { id } = req.params;
    const navbarItem = await NavbarItems.findByIdAndUpdate(id, {...req.body.navbarItem});
    
    res.redirect(`/admin/navbarItems/${navbarItem._id}`);
};
module.exports.deleteNavbarItem = async (req, res) => {
    const { id } = req.params;
    const deleteNavbarItem = await NavbarItems.findByIdAndDelete(id);
    res.redirect('/admin/navbarItems');
};
