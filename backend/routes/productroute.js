const express=require('express')
const Auth = require('../middleware/auth')
const product=require('../controllers/productcontrollers')
const router=express.Router()
router.post("/create",Auth, product.createproduct)
router.get("/show",Auth,product.Showproduct)

module.exports=router