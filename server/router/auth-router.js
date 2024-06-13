const express = require("express");
const router = express.Router();
const authontrollers = require("../controller/auth-control");

// router.get("/",(req,res)=>{
//     res.send("hello world");
// }) ;
router.route("/").get(authontrollers.home);

// router.route("/").get((req,res)=>{
//     res.send("hey i am ayushi arora");
// });

router.route("/registration").post(authontrollers.register);
module.exports = router;
