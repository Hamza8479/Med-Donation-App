const express = require("express");
const path = require("path");

//setting .config for production server
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const app = express();

//Production use
if (process.env.NODE_ENV === "production ") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(5300, (error) => {
  if (error) throw error;
  console.log("Server is listen on 5300");
});
