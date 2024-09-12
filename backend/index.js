const dotenv = require('dotenv').config();
const express = require('express');
const cookie = require('cookie-parser')
const UserRouter = require('./routes/userRoutes')
const productRoute=require('./routes/productroute')
const cors=require('cors')

const DB=require('./db/db')

const app = express();
app.use(cookie())

app.use(express.json())

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true

}))
// app.get('/', (req, res) => {
//     res.send("hello")

// })
app.use('/users', UserRouter)
app.use("/product",productRoute)
DB()
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});
