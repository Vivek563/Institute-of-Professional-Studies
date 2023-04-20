const Joi = require('joi');

module.exports.announcementSchema = Joi.object({
    announcement: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        pdfUrl: Joi.string().required()
        
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
        researchPaperCount: Joi.number().required().min(0)
    }).required()
});
module.exports.navbarItemSchema = Joi.object({
    navbarItem: Joi.object({
        item: Joi.string().required(),
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
module.exports.pageSchema = Joi.object({
    page: Joi.object({
        name: Joi.string().required(),
        title: Joi.string().required(), 
        icon: Joi.string().required(), 
        favicon: Joi.string().required(), 
        code: Joi.string().required(),
        path: Joi.string().required(), 
        shortDescription: Joi.string().required(), 
        about: Joi.string().required(), 
        style: Joi.string().required(), 
        script: Joi.string().required()
    }).required()
});