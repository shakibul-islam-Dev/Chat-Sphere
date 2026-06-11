//Externanl Import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
//Router Import
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
//Internal Improt
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
//databse conncection
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("conncetion sucessfully"))
  .catch((err) => console.log("Mogoose error", err));
//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setview
app.set("view engine", "ejs");

//set statict folder
app.use(express.static(path.join(__dirname, "public")));
//cookie secrect
app.use(cookieParser(process.env.COOKIE_SECRECT));
//routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//404 not found
app.use(notFoundHandler);
//error handleling
app.use(errorHandler);

//app listen
app.listen(PORT, () => {
  console.log(`conection on  ${PORT}`);
});
