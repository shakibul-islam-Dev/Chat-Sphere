const createError = require("http-errors");
const { model } = require("mongoose");
//404 not found
function notFoundHandler(req, res, next) {
  next(createError(404, "Bad Request"));
}

//default error handler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  if (res.locals.html) {
    // html response
    res.render("error", {
      title: "Error Page",
      message: "Something went wrong!",
      error: res.locals.error,
    });
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
