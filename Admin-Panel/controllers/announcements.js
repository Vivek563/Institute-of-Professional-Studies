const Announcements = require('../models/announcement');

module.exports.index = async (req, res) => {
    const announcements = await Announcements.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('announcements/index', { announcements });
};
module.exports.renderNewForm = (req, res) => {
    res.render('announcements/new');
};
module.exports.createAnnouncement = async (req, res) => {
    const newAnnouncement = new Announcements(req.body.announcement);
    await newAnnouncement.save();
    res.redirect(`/announcements/${newAnnouncement._id}`);
};
module.exports.showAnnouncement = async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findById(id)
    res.render('announcements/show', { announcement })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findById(id);
    res.render('announcements/edit', { announcement })
};
module.exports.updateAnnouncement = async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findByIdAndUpdate(id, {...req.body.announcement});
    res.redirect(`/announcements/${announcement._id}`);
};
module.exports.deleteAnnouncement = async (req, res) => {
    const { id } = req.params;
    const deleteAnnouncement = await Announcements.findByIdAndDelete(id);
    res.redirect('/announcements');
};
