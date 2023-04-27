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
        "serialNo": "1",
        "link": "/",
        "subItems": [],
        "subLinks": []      
    },
    {
        "item": "About",
        "serialNo": "2",
        "link": "#",
        "subItems": ["About UOA","About IPS"],
        "subLinks": ["/home/aboutUoA","/home/about"]
    },
    {
        "item": "Centres",
        "serialNo": "3",
        "link": "#",   
        "subItems": ["Centre of Computer Education","Centre of Fashion & Design Technology", "Centre of Food Technology", "Centre of Media Studies"],
        "subLinks": ["/home/centre/cce", "/home/centre/cfdt", "/home/centre/cft", "/home/centre/cms"]
    },
    {
        "item":  "Student",
        "serialNo": "4",
        "link": "#",   
        "subItems": ["Syllabus","Library"],
        "subLinks": ["/home/student","/home/Library"]
    },
    {
        "item":  "Gallery",
        "serialNo": "5",
        "link": "/home/gallery",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Admission",
        "serialNo": "6",
        "link": "/home/admission",
        "subItems": [],
        "subLinks": []   
    },
    // {
    //     "item":  "Newsletter",
    //      "serialNo": "9",
    //     "link": "/home/newsletter",
    //     "subItems": [],
    //     "subLinks": []   
    // },
    {
        "item":  "Contact Us",
        "serialNo": "7",
        "link": "/home/contactus",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Alumni",
        "serialNo": "8",
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
        about: "this is detailed section.",
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
        shortDescription: "<p>The Centre of Computer Education & Training was established under Institute of Professional Studies, University of Allahabad in December 2000. Initially it offered to University students short-term courses on Computer Basics, Programming, Hardware & Networking, Web Design and Computer-Aided Financial Management and training for DOEACC 'O' Level examination.</p><p>In 2006 the Centre was granted full accreditation by DOEACC Society (An autonomous body of Dept. of Information Technology, Ministry of Communication & Information Technology, Govt. of India, New Delhi) for a period of 6 years to conduct DOEACC 'O' Level computer courses. Later in the year 2007 the centre also initiated Master of Computer Applications (MCA) and Bachelor of Computer Applications (BCA).</p>",
        about: "<p>The Centre of Computer Education & Training was established under the Institute of Professional Studies, University of Allahabad in December 2000. Initially, it offered to University students short-term courses on Computer Basics, Programming, Hardware & Networking, Web Design and Computer-Aided Financial Management and training for DOEACC 'O' Level examination.</p><p>In 2006 the Centre was granted full accreditation by DOEACC Society (An autonomous body of Dept. of Information Technology, Ministry of Communication & Information Technology, Govt. of India, New Delhi) for a period of 6 years to conduct DOEACC 'O' Level computer courses. Later in the year 2007 the centre also initiated Master of Computer Applications (MCA) and Bachelor of Computer Applications (BCA).</p><h4>OBJECTIVE</h4><ul><li>To provide a foundation in computing principles and business practices.</li><li>To help students analyse problems in a wide range of applications.</li><li>To provide educational and personality development facilities for preparing worthy citizens of tomorrow, hence, contribute to the growth of the society.</li><li>To provide industry-academia interface.</li><li>To prepare students to undertake system development and expose them to enterprise software management methodologies.</li><li>To conduct need based training programs & workshops.</li></ul><h4>FACILITIES</h4><ul><li>The Centre has air-conditioned computer labs with 200 computers in a networked environment.</li><li>Eight lecture rooms, all lecture rooms are furnished with multimedia equipment.</li><li>Physics / Electronics Lab for BCA students.</li><li>Digital Hardware Labs.</li><li>Microprocessor/ Micro-controller Lab.</li><li>Network Experimentation Lab</li><li>Library with over four thousand books</li><li>Internet access facility</li><li>The entire university campus including the university hostels and the guest house has been networked. All the units and the departments in the various campuses have been linked through optical fiber cable.</li><li>Computing Facilities and Labs:<p>The labs in the institute are modern and networked. It offers the students as well as the faculty good computing power on various platforms.</p></li></ul><h4>SCOPE OF EMPLOYMENT</h4><p>Students can opt for a career in application software development, testing, and maintenance/as system analyst/DB administrator/as independent software developers or entrepreneurs.</p><h4>ENGAGEMENT WITH THE SOCIETY</h4><ul><li>In each semester the Centre, through its book bank provides a set of good textbooks to the students so that they may study well.</li><li>The Institute is a member of the following societies of IEEE: IEEE Computer Society, IEEE Communications Society, IEEE Computational Intelligence Society, IEEE Information Theory Society, IEEE Control Systems Society, IEEE Signal Processing Society, and IEEE Education Society.</li><li>The Institute runs the student chapter of IEEE.</li></ul>",        style: "css/centre.css",
        script: "js/home.js"
    },
    {
        name: "Centre of Fashion & Design Technology",
        title: "Centre of Fashion & Design Technology",
        icon: "assets/fashion.png",
        favicon: "faviconImage",
        code: "cfdt",
        path: "../../",
        shortDescription: "<p>Today fashion is seen everywhere. With rising income levels, growing 'Look Good, Feel Good' attitude and development in the retail sector the fashion world indeed holds a good prospect. It has almost become a fashion in the business to be in the business of fashion.</p><p>Fashion can be simple and yet so elegant. It was only in India where unstitched fabrics created fashion for men and women that has been termed as the most innovative invention in the world of fashion. The Indians mastered the art of draping fabrics around the body and taught the world how a few yards of fabric like a sari or a dhoti or a shawl can make a wonderful fashion statement.</p><p>has been worn by Indian women for as long as 5000 years - and has been the most popular style in the history of women's fashion. Fashion creators of our country our master spinners, weavers, knitters and dyers, were known the world over for their exquisite craftsmanship and skill. The blend of Indian and Western cultures have made sarees and salwar kameez an international fashion statement. Ritu Kumar , Ritu Beri, Hemant Trivedi have made their way in the fashion scenario of PARIS - The fashion capital of world.</p>",
        about: "<p>Today fashion is seen everywhere. With rising income levels, growing 'Look Good, Feel Good' attitude and development in the retail sector the fashion world indeed holds a good prospect. It has almost become a fashion in the business to be in the business of fashion.</p><p>Fashion can be simple and yet so elegant. It was only in India where unstitched fabrics created fashion for men and women that has been termed as the most innovative invention in the world of fashion. The Indians mastered the art of draping fabrics around the body and taught the world how a few yards of fabric like a sari or a dhoti or a shawl can make a wonderful fashion statement.</p><p>has been worn by Indian women for as long as 5000 years - and has been the most popular style in the history of women's fashion. Fashion creators of our country our master spinners, weavers, knitters and dyers, were known the world over for their exquisite craftsmanship and skill. The blend of Indian and Western cultures have made sarees and salwar kameez an international fashion statement. Ritu Kumar , Ritu Beri, Hemant Trivedi have made their way in the fashion scenario of PARIS - The fashion capital of world.</p><h4>OBJECTIVES</h4><ul><li>To prepare the students for the fashion industry.</li><li>To be able to implement techniques of Computer Aided Design (CAD) in the field of fashion designing for making it much simpler and faster.</li><li>To provide the knowledge of spinning, knitting, weaving and processing of all types of fabrics.</li><li>To design garments for commercial sale to suit a particular demographic group.</li><li>To be able to use artistic expertise combined with garment construction technique to create wearable apparel.</li><li>To understand quality control exercises to ensure quality of the garments. Sophisticated needle detector machines ensure that the products are metal-free.</li><li>To be able to develop in-house Printing & Embroidery setup to impart the requisite value additions to enhance the look and feel of the garments.</li><li>To understand the managerial responsibilities of a fashion personnel. To be able to formulate a procedure for pricing the products in proportion to production scale and collect information related to customer satisfaction.</li><li>To create awareness about the market and develop the ability to analyse the growth potentials.</li></ul><h4>SCOPE OF EMPLOYMENT</h4><p>Students can opt for career as Designer/ Pattern Maker/ Grader / Fashion Coordinator/ Printing Designer / Garment Manufacturer / Merchandiser / Fashion Photographer / Fashion Journalist.</p><h4>PRODUCTION HOUSE</h4><p>Institute has also set up a Production House to provide linkage with market and industry. It functions as a part of Entrepreneurship Development Cell. It also acts as incubator for its students and provides opportunity of \"earn while you learn\" to its students. The cell invites bright and feasible entrepreneurship ideas, puts forward a transparent stage for the students to speak, interact and participate.</p>",
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
        shortDescription: "<p>Food and Nutrition Sciences are the sciences of the 21st century. The need is to have a multi-disciplinary focus on food. This was achieved by the creation of the Centre of Food Technology under the Institute of Professional Studies. Centre of Food Technology (CFT) has taken a holistic view of manpower planning in the food industry. The vision encompasses food science, food production, food processing, food technology, food safety, food management, entrepreneurship development, food processing and rural development; agriculture and industry linkage through food processing, quality assurance for safe food, research and development on functional foods.</p><p>Sound technical training in food industries and research institutes is also provided to the students so as to equip them with meticulous practical knowledge and build a competitive professional interface. We are proud to maintain a good placement record and strong collaboration with other premier food industries, research institutes, lth institutes, and hospitals of the country. It is the only centre of the university to offer the programs- B. Voc. (Bachelor of Vocation) in Food Processing and Technology, M.Sc. Food technology, M. Sc. Nutritional Sciences, D. Phil In Food Technology and Nutritional Sciences.</p>",
        about: "<p>Food and Nutrition Sciences are the sciences of the 21st century. The need is to have a multi-disciplinary focus on food. This was achieved by the creation of the Centre of Food Technology under the Institute of Professional Studies. Centre of Food Technology (CFT) has taken a holistic view of manpower planning in the food industry. The vision encompasses food science, food production, food processing, food technology, food safety, food management, entrepreneurship development, food processing and rural development; agriculture and industry linkage through food processing, quality assurance for safe food, research and development on functional foods.</p><p>Sound technical training in food industries and research institutes is also provided to the students so as to equip them with meticulous practical knowledge and build a competitive professional interface. We are proud to maintain a good placement record and strong collaboration with other premier food industries, research institutes, lth institutes, and hospitals of the country. It is the only centre of the university to offer the programs- B. Voc. (Bachelor of Vocation) in Food Processing and Technology, M.Sc. Food technology, M. Sc. Nutritional Sciences, D. Phil In Food Technology and Nutritional Sciences.</p><h4>SCOPE OF EMPLOYMENT</h4><p>Students can opt for a career as a management professional in the food, hospitality, retail industry, and laboratories as Food Safety Officer/ R&D/ Quality Control Officer/ Food Auditor, Trainer/ Counselor in Food Sector/ Production/ Quality manager in food industries.</p><p>Students can pursue a lucrative career as dietitians in hospitals/ with the government sector and NGOs in community nutrition/ counselor in food industries/ nutritionist/ planning, monitoring and evaluation of nutrition and health programs/ entrepreneurial ventures in academic and research labs.</p><p>Students can pursue a lucrative career as dietitians in hospitals/ with the government sector and NGOs in community nutrition/ counselor in food industries/ nutritionist/ planning, monitoring and evaluation of nutrition and health programs/ entrepreneurial ventures in academic and research labs.</p><h4>FACILITIES</h4><p>Centre is proud to have a National Accreditation Board for Laboratories (NABL) certified \"Food Analysis and Research Laboratory (FARL)\" certified for Chemical and Biological Testing of Food Products and Water in the year 2013. The centre also acts as a nodal lab for the Food Safety and Standards Authority of India (FSSAI). The centre has adequate and latest facilities in terms of infrastructure and well-equipped laboratories with the support of various grants provided by the Ministry of Food Processing Industries (MoFPI) and the University Grants Commission (UGC). The following labs have been set up as under:</p><h4>ACADEMIC LABORATORIES:</h4><ul><li>Teaching Lab-I;</li><li>Teaching Lab-II</li><li>Experimental Cookery lab</li><li>Processing Lab</li><li>Microbiology Lab</li><li>Advanced Analytical Lab</li><li>Advanced Microbiology lab</li><li>Instrumentation Lab</li></ul><h4>RESEARCH DIVISION</h4><p>Current Research endeavors of the centre consist of the following thrust areas being strenuously worked upon:</p><ul><li>Health foods, Convenience foods, Nutraceuticals, Processed & Packaged Foods</li><li>Exploration and utilization of underutilized crops.</li><li>Utilization of by-products to develop value added products.</li><li>Addressal of micro and macro nutrient deficiencies through the development of fortified foods.</li><li>Pre-biotics and Probiotics for holistic health</li><li>Postharvest processing; Value addition; Shelf life extension of perishable foods etc</li><li>Quality control and quality assurance.</li></ul>",
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
        shortDescription: "<p>In 21st Century the media has a wide spectrum to cover e.g.newspaper , television, radio, mobile, and internet and so on and so forth. The Media Industry is going global, becoming digital and converging. In our country Media Industry is growing at the rate of 20 percent per annum. Entertainment and media, together, form the country's sixth biggest industry, with 3.5 million people working in it.</p><p>Within the next 4-5 years, the industry is expected to cross eighty thousand crores annually. Media organization is now looking to optimize its reach across platforms such as newspaper, T.V., IPTV, Radio, Internet and Mobile. As converging media (Cross Media) content involves more than one platform, so it has a high demand of multi-skilled media persons.</p><p>The Centre prepares students for employment in the media industry. The courses has been designed for the real world of contemporary media. Students will work with industry-standard equipment gaining skills in media production (print, broadcast and online), research, communication, reporting and media handling. We believe that a combination of writing and production skills either in print, television or radio; a broad understanding of the media and the ability to think critically are essential for people who are planning careers in the rapidly evolving media industry.</p>",
        about: "<p>In 21st Century the media has a wide spectrum to cover e.g.newspaper , television, radio, mobile, and internet and so on and so forth. The Media Industry is going global, becoming digital and converging. In our country Media Industry is growing at the rate of 20 percent per annum. Entertainment and media, together, form the country's sixth biggest industry, with 3.5 million people working in it.</p><p>Within the next 4-5 years, the industry is expected to cross eighty thousand crores annually. Media organization is now looking to optimize its reach across platforms such as newspaper, T.V., IPTV, Radio, Internet and Mobile. As converging media (Cross Media) content involves more than one platform, so it has a high demand of multi-skilled media persons.</p><p>The Centre prepares students for employment in the media industry. The courses has been designed for the real world of contemporary media. Students will work with industry-standard equipment gaining skills in media production (print, broadcast and online), research, communication, reporting and media handling. We believe that a combination of writing and production skills either in print, television or radio; a broad understanding of the media and the ability to think critically are essential for people who are planning careers in the rapidly evolving media industry.</p><h4>OBJECTIVES</h4><ul><li>To prepare students for the Indian media industry. </li><li>To provide a solid theoretical background in journalism.</li><li>To provide a practical exposure in Journalism for print & electronic media.</li><li>To provide a set of ethics for them to imbibe.</li><li>To provide a marketing orientation to them.</li></ul><h4>SCOPE OF EMPLOYMENT</h4><p>Students can opt for career in print, electronic, broadcast (radio) and web media as well as in field of public relation and advertisement.</p><h4>FACILITIES</h4><h5>Photography Lab:</h5><p>Film cameras, Digital cameras of various range and qualities, Photo scanner, Laser printer, Fully equipped dark-room, Well equipped studio with studio light system.</p><h5>Videography & Editing Lab:</h5><p> Cameras: Five DV cameras</p> <p>HDV camera Editing Systems: Mac Platform, also Pinnacle Liquid Edition, Pinnacle Studio, Hi-end Computers, Acaustic system and other accessories of Videography.</p><h5>Computer Lab:</h5><p>The Centre has well equipped lab with Video editing, Photo editing, Page making & designing software.</p><h5>Media Research Cell:</h5><p>The Centre has well equipped Media Research Cell. Within Research Cell a diverse group of scholars and students is researching and debating questions of media history; media policy, technologies and practice; literary and cultural history; politics and power and new media developments.</p><h5>Library:</h5><p>The Centre has rich repository of books and journals.</p>",
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
    

