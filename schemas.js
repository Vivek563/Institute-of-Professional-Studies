const Joi = require('joi');

module.exports.announcementSchema = Joi.object({
    announcement: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        pdfUrl: Joi.string().required()
        
    }).required()
});
module.exports.courseSchema = Joi.object({
    course: Joi.object({
        name: Joi.string().required(),
        code: Joi.string().required(),
        centreCode: Joi.string().required(),
        pdfUrl: Joi.string().required(),
        duration: Joi.number().required().min(1),
        description: Joi.string().min(0)       
    }).required()
});
module.exports.eventSchema = Joi.object({
    event: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        pdfUrl: Joi.string().required()
        
    }).required()
});
module.exports.facultySchema = Joi.object({
    faculty: Joi.object({
        name: Joi.string().required(),
        designation: Joi.string().required(),
        emailId: Joi.string().required(),
        education: Joi.string().required(),
        researchPaperCount: Joi.number().required().min(0),
        centreCode: Joi.string().required()
    }).required()
});
module.exports.navbarItemSchema = Joi.object({
    navbarItem: Joi.object({
        item: Joi.string().required(),
        serialNo: Joi.number().required().min(1),
        link: Joi.string().required(), 
        subItems: Joi.array().sparse().items(Joi.string().empty('')),
        subLinks: Joi.array().sparse().items(Joi.string().empty(''))
    }).required()
});
module.exports.newsSchema = Joi.object({
    aNews: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        pdfUrl: Joi.string().required()
        
    }).required()
});
module.exports.notificationSchema = Joi.object({
    notification: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        pdfUrl: Joi.string().required(),
        code: Joi.string().required()
    }).required()
});

module.exports.pageSchema = Joi.object({
    page: Joi.object({
        name: Joi.string().required(),
        title: Joi.string().required(), 
        icon: Joi.string().required(), 
        favicon: Joi.string().required(), 
        code: Joi.string().required(),
        path: Joi.string().required(), 
        shortDescription: Joi.string().required(), 
        about: Joi.string().required()
    }).required()
});

module.exports.staffSchema = Joi.object({
    staff: Joi.object({
        name: Joi.string().required(),
        designation: Joi.string().required(),
        emailId: Joi.string().required(),
        education: Joi.string().required(),
        centreCode: Joi.string().required(),
        photo: Joi.string().min(0)
    }).required()
});

module.exports.studentSchema = Joi.object({
    student: Joi.object({
        enrollmentNumber: Joi.string().required(),
        centreCode: Joi.string().required(),
        name: Joi.string().required(),
        semster: Joi.number().required(),
        address: Joi.string().required(),
        phoneNumber: Joi.number().required().min(0000000000).max(9999999999),
        doa: Joi.date().iso().required(),
        dob: Joi.date().iso().required()
    }).required()
});