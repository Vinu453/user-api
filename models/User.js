const mongoose =require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("User",userSchema);



// Schema acts like: A blueprint that defines the structure and rules of documents inside a collection.
//Model is the interface that allows us to perform database operations using the defined schema.
// // Schema defines: Field names, Field types, Validation rules, Default values,Indexes,Hooks
// Model provides:Database connection binding,CRUD operations,Query building,Middleware execution
// Model provides:Database connection binding,CRUD operations,Query building,Middleware execution