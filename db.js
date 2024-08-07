const mongoose=require("mongoose")
require('dotenv').config();
const mongoURL=process.env.MONGO_URL

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("MongoDb is connected!")
})

db.on('disconnected',()=>{
    console.log("MongoDb is disconnected!")
})

db.on('error',(err)=>{
    console.error("MongoDb is connection Error!",err.message)
})

module.exports=db;

