const {
        announcementSchema,
        courseSchema,
        eventSchema,
        facultySchema,
        navbarItemSchema,
        newsSchema,
        notificationSchema,
        pageSchema,
        studentSchema,
        staffSchema
    } = require('./schemas');

const ExpressError = require('../utils/ExpressError');

module.exports.validateAnnouncement = (req, res, next) => {
    const { error } = announcementSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validateCourse = (req, res, next) => {
    const { error } = courseSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validateEvent = (req, res, next) => {
    const { error } = eventSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validateFaculty = (req, res, next) => {
    const { error } = facultySchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validateNavbarItem = (req, res, next) => {
    const { error } = navbarItemSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validateNews = (req, res, next) => {
    const { error } = newsSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validateNotification = (req, res, next) => {
    const { error } = notificationSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validatePage = (req, res, next) => {
    const { error } = pageSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validateStaff = (req, res, next) => {
    const { error } = staffSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
module.exports.validateStudent = (req, res, next) => {
    const { error } = studentSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
};
