const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Daria:VY5lGgyUxKTKXngM@cluster0.pz3wbxy.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {console.log(error.message)
  process.exit(1);
  });
