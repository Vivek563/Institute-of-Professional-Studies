const mongoose = require('mongoose');

const News = require('./models/news');
const Announcements = require('./models/announcement');
const Events = require('./models/event');
const NavbarItems = require('./models/navbarItem');
const Faculties = require('./models/faculty');
const Pages = require('./models/page');


mongoose.connect('mongodb://127.0.0.1:27017/IPS')
 .then(() => {
    console.log("CONNECTION OPEN!!!")
 })
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)
})

const seedAnnouncements =[
    {
        title: 'announcement title 1',
        description: 'this is description of announcement 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'announcement title 2',
        description: 'this is description of announcement 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'announcement title 3',
        description: 'this is description of announcement 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'announcement title 4',
        description: 'this is description of announcement 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'announcement title 5',
        description: 'this is description of announcement 5',
        pdfUrl: 'https://www.w3schools.com/'
    }
]

Announcements.insertMany(seedAnnouncements)  
                                 
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })

const seedEvents =[
    {
        title: 'event title 1',
        description: 'this is description of event 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'event title 2',
        description: 'this is description of event 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'event title 3',
        description: 'this is description of event 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'event title 4',
        description: 'this is description of event 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'event title 5',
        description: 'this is description of event 5',
        pdfUrl: 'https://www.w3schools.com/'
    }
]

Events.insertMany(seedEvents)  
                                 
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })

const seedFaculties =[
    {
        name: 'faculty name 1',
        designation: 'this is designation of faculty 1',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 1',
        researchPaperCount: 2    
    },
    {
        name: 'faculty name 2',
        designation: 'this is designation of faculty 2',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 2',
        researchPaperCount: 2    
    },
    {
        name: 'faculty name 3',
        designation: 'this is designation of faculty 3',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 3',
        researchPaperCount: 2    
    },
    {
        name: 'faculty name 4',
        designation: 'this is designation of faculty 4',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 4',
        researchPaperCount: 2    
    },
    {
        name: 'faculty name 5',
        designation: 'this is designation of faculty 5',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 5',
        researchPaperCount: 2    
    }
    
]

Faculties.insertMany(seedFaculties)  
                                    
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })

const seedNavbarItems =[
    {
        "item": "Home",
        "link": "/",
        "subItems": [],
        "subLinks": []      
    },
    {
        "item": "About",
        "link": "/home/about",
        "subItems": [],
        "subLinks": []
    },
    {
        "item": "Centres",
        "link": "#",   
        "subItems": ["Centre of Computer Education","Centre of Fashion & Design Technology", "Centre of Food Technology", "Centre of Media Studies"],
        "subLinks": ["/home/centre/cce", "/home/centre/cfdt", "/home/centre/cft", "/home/centre/cms"]
    },
    {
        "item":  "Student",
        "link": "/home/student",   
        "subItems": [],
        "subLinks": []
    },
    {
        "item":  "Gallery",
        "link": "/home/gallery",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Admission",
        "link": "/home/admission",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Newsletter",
        "link": "/home/newsletter",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Contact Us",
        "link": "/home/contactus",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Alumni",
        "link": "/home/alumni",
        "subItems": [],
        "subLinks": []   
    }
]

NavbarItems.insertMany(seedNavbarItems)  
                                 
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })

const seedNews =[
    {
        title: 'news title 1',
        description: 'this is description of news 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'news title 2',
        description: 'this is description of news 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'news title 3',
        description: 'this is description of news 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'news title 4',
        description: 'this is description of news 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'news title 5',
        description: 'this is description of news 5',
        pdfUrl: 'https://www.w3schools.com/'
    }
]
    
News.insertMany(seedNews)  
                                    
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })

    const seedPages =[
        {
            name: "Institute of Professional Studies",
            title: "Institute of Professional Studies",
            icon: "iconImage",
            favicon: "faviconImage",
            code: "home",
            path: "../",
            shortDescription: "This is a short description.",
            about: "This is a detailed description.",
            style: "css/home.css",
            script: "js/home.js"
        },
        {
            name: "Centre of Computer Education",
            title: "Centre of Computer Education",
            icon: "assets/computer.png",
            favicon: "faviconImage",
            code: "cce",
            path: "../../",
            shortDescription: "This is a short description.",
            about: "This is a detailed description.",
            style: "css/centre.css",
            script: "js/home.js"
        },
        {
            name: "Centre of Fashion & Design Technology",
            title: "Centre of Fashion & Design Technology",
            icon: "assets/fashion.png",
            favicon: "faviconImage",
            code: "cfdt",
            path: "../../",
            shortDescription: "This is a short description.",
            about: "This is a detailed description.",
            style: "css/centre.css",
            script: "js/centre.js"
        },
        {
            name: "Centre of Food Technology",
            title: "Centre of Food Technology",
            icon: "assets/food.png",
            favicon: "faviconImage",
            code: "cft",
            path: "../../",
            shortDescription: "This is a short description.",
            about: "This is a detailed description.",
            style: "css/centre.css",
            script: "js/centre.js"
        },
        {
            name: "Centre of Media Studies",
            title: "Centre of Media Studies",
            icon: "assets/media.png",
            favicon: "faviconImage",
            code: "cms",
            path: "../../",
            shortDescription: "This is a short description.",
            about: "This is a detailed description.",
            notification: "This is notification.",
            faculty: ["faculty member 1", "faculty member 2"],
            gallery: "galleryImages",
            style: "css/centre.css",
            script: "js/centre.js"
        }
    ]
    
    Pages.insertMany(seedPages)  
                                     
        .then(res => {
        })
        .catch(err => {
            console.log(err)
        })
    