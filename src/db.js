const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb Connected successfully");
  })
  .catch((err) => {
    console.error(err);
  });
