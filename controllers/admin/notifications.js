const Pages = require('../../models/page');
const Notification = require('../../models/notification');

module.exports.index = async (req, res) => {
    const notifications = await Notification.find({}).limit(10).sort({updatedAt: 'desc'})
 
    res.render('notifications/index', { notifications});
};
module.exports.renderNewForm = (req, res) => {
    res.render('notifications/new');
};
module.exports.createNotification = async (req, res) => {
    const newNotification = new Notification(req.body.notification);
    const page = await Pages.findOne({centreCode: `${req.body.notification.centreCode}`});
    page.notifications.push(newNotification);
    await newNotification.save();
    await page.save();
    res.redirect(`/admin/notifications/${newNotification._id}`);
};
module.exports.showNotification = async (req, res) => {
    const { id } = req.params;
    const notification = await Notification.findById(id)
    let name = '';
    if(notification.centreCode === 'cfdt'){ name = 'Fashion & Design Technology'; }
    else if(notification.centreCode === 'cft'){ name = 'Food Technology' }
    else if(notification.centreCode === 'cms'){ name = 'Media Studies' }
    else if(notification.centreCode === 'cce'){ name = 'Computer Education' }
    res.render('notifications/show', { notification, name })
};
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    let n = '0';
    if(notification.centreCode === 'cce'){ n = '1' }
    else if(notification.centreCode === 'cfdt'){ n = '2' }
    else if(notification.centreCode === 'cft'){ n = '3' }
    else if(notification.centreCode === 'cms'){ n = '4' }
    res.render('notifications/edit', { notification, n })
};
module.exports.updateNotification = async (req, res) => {
    const { id } = req.params;
    const notification = await Notification.findByIdAndUpdate(id, {...req.body.notification});
    res.redirect(`/admin/notifications/${notification._id}`);
};
module.exports.deleteNotification = async (req, res) => {
    const { id } = req.params;
    const deleteNotification = await Notification.findByIdAndDelete(id);
    res.redirect('/admin/notifications');
};
