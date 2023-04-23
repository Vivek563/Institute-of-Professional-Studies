const mongoose = require('mongoose');

const Announcements = require('./models/announcement');
const Events = require('./models/event');
const Faculties = require('./models/faculty');
const NavbarItems = require('./models/navbarItem');
const News = require('./models/news');
const Notifications = require('./models/notification');
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
        title: 'Dummy Announcement title 1',
        description: 'this is description of announcement 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy Announcement title 2',
        description: 'this is description of announcement 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy Announcement title 3',
        description: 'this is description of announcement 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy Announcement title 4',
        description: 'this is description of announcement 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy Announcement title 5',
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
        title: 'Dummy Event title 1',
        description: 'this is description of event 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy Event title 2',
        description: 'this is description of event 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy Event title 3',
        description: 'this is description of event 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy Event title 4',
        description: 'this is description of event 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy Event title 5',
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
        name: 'Dummy Faculty name 1',
        designation: 'this is designation of faculty 1',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 1',
        researchPaperCount: 2,
        photo: 'dlfodg',
        code: 'cms'    
    },
    {
        name: 'Dummy Faculty name 2',
        designation: 'this is designation of faculty 2',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 2',
        researchPaperCount: 2,
        photo: 'dlfodg',
        code: 'cms'    
    },
    {
        name: 'Dummy Faculty name 3',
        designation: 'this is designation of faculty 3',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 3',
        researchPaperCount: 2,
        photo: 'dlfodg',
        code: 'cms'    
    },
    {
        name: 'Dummy Faculty name 4',
        designation: 'this is designation of faculty 4',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 4',
        researchPaperCount: 2,
        photo: 'dlfodg',
        code: 'cms'    
    },
    {
        name: 'Dummy Faculty name 5',
        designation: 'this is designation of faculty 5',
        emailId: 'gg.gg@gmail.com/',
        education: 'this is education of faculty 5',
        researchPaperCount: 2,
        photo: 'dlfodg',
        code: 'cms'    
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
        "link": "#",
        "subItems": ["About UOA","About IPS"],
        "subLinks": ["/home/aboutUoA","/home/about"]
    },
    {
        "item": "Centres",
        "link": "#",   
        "subItems": ["Centre of Computer Education","Centre of Fashion & Design Technology", "Centre of Food Technology", "Centre of Media Studies"],
        "subLinks": ["/home/centre/cce", "/home/centre/cfdt", "/home/centre/cft", "/home/centre/cms"]
    },
    {
        "item":  "Student",
        "link": "#",   
        "subItems": ["Syllubus","Library"],
        "subLinks": ["/home/student","/home/Library"]
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
        title: 'Dummy News title 1',
        description: 'this is description of news 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy News title 2',
        description: 'this is description of news 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy News title 3',
        description: 'this is description of news 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy News title 4',
        description: 'this is description of news 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'Dummy News title 5',
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

const seedNotifications =[
    {
        title: 'Dummy Notification title 1',
        description: 'this is description of notification 1',
        pdfUrl: 'https://www.w3schools.com/',
        code: "cce"
    },
    {
        title: 'Dummy Notification title 2',
        description: 'this is description of notification 2',
        pdfUrl: 'https://www.w3schools.com/',
        code: "cft"
    },
    {
        title: 'Dummy Notification title 3',
        description: 'this is description of notification 3',
        pdfUrl: 'https://www.w3schools.com/',
        code: "cfdt"
    },
    {
        title: 'Dummy Notification title 4',
        description: 'this is description of notification 4',
        pdfUrl: 'https://www.w3schools.com/',
        code: "cms"
    },
    {
        title: 'Dummy Notification title 5',
        description: 'this is description of notification 5',
        pdfUrl: 'https://www.w3schools.com/',
        code: "cce"
    }
]

Notifications.insertMany(seedNotifications)  
                                    
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


//  mongoose.connection.close();
    

