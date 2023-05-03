const multer = require('multer');
const path = require('path');

// let upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it
	
let storage = multer.diskStorage({
	destination: function (req, file, cb) {

		if(file.fieldname === 'img'){
			cb(null, 'public/uploads/images')
		}
		else if(file.fieldname === 'pdf'){
			cb(null, 'public/uploads/documents')
		}
	},
	filename: function (req, file, cb) {
		
		if(file.fieldname === 'img'){
			cb(null, file.fieldname + "-" + Date.now()+".jpg")
		}
		else if(file.fieldname === 'pdf'){
			cb(null, file.fieldname + "-" + Date.now()+".pdf")
		}
	}
})
	
// Define the maximum size for uploading
// picture i.e. 5MB. it is optional
const maxSize = 5 * 1000 * 1000;


let upload = multer({
	storage: storage,
	limits: { fileSize: maxSize },
	fileFilter: (req, file, cb) => {
	
		// Set the filetypes, it is optional
		let filetypes = /jpeg|jpg|png/;
		
		if(file.fieldname === 'pdf'){
			filetypes = /pdf/;
		}
		let mimetype = filetypes.test(file.mimetype);
		
		let extname = filetypes.test(path.extname(
					file.originalname).toLowerCase());
		
		if (mimetype && extname) {
			return cb(null, true);
		}
	
		cb("Error: File upload only supports the "
				+ "following filetypes - " + filetypes);
	}

// img  and pdf are the names of file attribute
}).fields([{ name: 'img', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]);;	


module.exports.index =  (req,res) => {
    res.render('uploads/index');
};

module.exports.renderNewForm =  (req,res) => {
    res.render('uploads/new');
};

module.exports.createUpload =  (req, res, next) => {
		
	// Error MiddleWare for multer file upload, so if any
	// error occurs, the image would not be uploaded!
	upload(req, res, (err) =>  {

		
		if(err) {

			// ERROR occurred (here it can be occurred due
			// to uploading image of size greater than
			// 5MB or uploading different file type)
			next(err)
		}
		else {

			// SUCCESS, image successfully uploaded
			res.render('uploads/show')
		}
	})
};