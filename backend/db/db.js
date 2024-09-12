const mongoose = require('mongoose')
const DB=async()=>{
    try {
        await mongoose.connect(process.env.MONGOURI)
        console.log('Connected to MongoDB')
        
    } catch (error) {
        console.log("mongo error",error)
        
    }
}
module.exports=DB