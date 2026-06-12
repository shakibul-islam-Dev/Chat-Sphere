const uploader = require("../../utilities/singleUploader");
function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatar",
    ["image/jpeg", "image/jpg", "image/png"],
    100000000,
    "Only .jpg, jpeg or .png formate allowed ",
  );
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.meassage,
          },
        },
      });
    } else {
      next();
    }
  });
}
module.exports = avatarUpload;
