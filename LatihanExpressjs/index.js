const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./router");

app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/endpointLain", (req, res) => {
  res.send("Hello World");
});

// Tess Error
app.get("/iniError", (req, res) => {
  iniError;
});
// Solusi Selesaikan Error
app.use(function (err, req, res, next) {
  console.log(err);
  //   Internal Server Error handler
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

app.use(router);

app.listen(5000, () => {
  console.log("server nyala");
});

// 404 Handler
app.use(function (req, res, next) {
  res.status(404).json({
    status: "fail",
    errors: "Not Found",
  });
});
