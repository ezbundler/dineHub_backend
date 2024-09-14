import mongoose from "mongoose";



export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI , {
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("Connected to data base successfully!");
    }).catch(err=>{
        console.log(`Some Error occured! PLease try Again connecting to database ${err} `);
    })
}