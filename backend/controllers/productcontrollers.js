const Product=require('../modal/productmodal')


const createproduct=async(req,res)=>{
    try {
        const {name,description,price}=req.body
        if(!name||!description||!price)return res.status(400).json({msg:"fill all fields"})
            const products=await Product.create({
        name,
        description,
        price

        })
        res.status(200).json({products,msg:"product created"})
        
    } catch (error) {
        console.log("product error",error)
        
    }

}
const Showproduct=async(req,res)=>{
    try {
        const products=await Product.find()
        res.status(200).json({products,msg:"all products"})
        
    } catch (error) {
        console.log("product error",error)
        
    }
}
module.exports={createproduct,Showproduct};
