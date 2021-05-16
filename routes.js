const express = require("express");
const router = express.Router();
// var services = require("./services.js");
var STATIC_DIR = __dirname;

console.log("STATIC_DIR ======================", STATIC_DIR);

router.get("/raji", (req, res) => {
   res.send("hi raji welcome to vivaha project");
});
router.get("*", function (req, res) {
   res.sendFile(`${__dirname}/public/index.html`);
});

router.post("/register", (req, res) => {
   var payload = req.body;
   console.log("payload ===========", payload);
   res.status(200).send({ message: "nani is a bad boy" });
});

module.exports = router;
