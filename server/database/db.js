const mongoose=require('mongoose');

const connectDB = async()=>{
    try{
        const conString = "mongodb+srv://rahulbagga:12345@cluster0.yqym6.mongodb.net/crudmvc?retryWrites=true&w=majority";
        const con = await mongoose.connect(conString,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`MongoDB connected: ${con.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;