const multer = require("multer");
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Accept only PDFs and PPTs
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "application/vnd.ms-powerpoint" ||
    file.mimetype === "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF or PPT files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
