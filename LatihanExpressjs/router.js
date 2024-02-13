const express = require("express");
const router = express.Router();

var User = [
  { nama: "Rasyah", age: 12 },
  { nama: "Irga", age: 24 },
];

const User1 = { nama: "Irga", age: 24 };
var data;
for (const key in User1) {
  data = User1[key];
}
router.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send(`Hello ${data}`);
});

router.get("/about", (req, res) => {
  res.send("About Birds");
});

module.exports = router;
