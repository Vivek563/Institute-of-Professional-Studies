const multer = require('multer');
const path = require('path');

// let upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it
	
let storage = multer.diskStorage({
	destination: function (req, file, cb) {

		// Uploads/images is the Upload_folder_name
		cb(null, 'public/uploads/images')
	},
	filename: function (req, file, cb) {
	cb(null, file.fieldname + "-" + Date.now()+".jpg")
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
		let mimetype = filetypes.test(file.mimetype);

		let extname = filetypes.test(path.extname(
					file.originalname).toLowerCase());
		
		if (mimetype && extname) {
			return cb(null, true);
		}
	
		cb("Error: File upload only supports the "
				+ "following filetypes - " + filetypes);
	}

// img is the name of file attribute
}).single('img');	


module.exports.renderNewStore =  (req,res) => {
    res.render('stores/new');
};

module.exports.createStore =  (req, res, next) => {
		
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
			res.render('stores/show')
		}
	})
};