const multer = require("multer");
const path = require("path");
function uploader(
  subfolder_path,
  allowed_file_types,
  max_file_size,
  error_msg,
) {
  //Upload Folder
  const UPLOADS_FOLDER = `${__dirname}/../../public/upload/${subfolder_path}/`;
  //Sorage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLocaleLowerCase()
          .split(" ")
          .join("_") +
        "_" +
        Date.now();
      cb(null, filename + fileExt);
    },
  });
  //prepare the final multer upload object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error(error_msg));
      }
    },
  });
  return upload;
}

module.exports = uploader;
