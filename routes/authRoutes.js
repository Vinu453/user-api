const express =require("express")
const router =express.Router();

const{ signup } = require("../Controllers/authControllers");
router.post("/signup",signup);
 module.exports =router;
