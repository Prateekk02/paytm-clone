const express = require("express");
const userRouter = require("./user")
const accountRouter = require("./account")

const router = express.Router();

console.log("In the route/index.js")
router.use("/user", userRouter); 
console.log("User end-point exit")
router.use("/account", accountRouter);
console.log("Account end-point exit")

module.exports = router;