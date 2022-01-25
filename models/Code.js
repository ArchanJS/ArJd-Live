const mongoose=require('mongoose');

const codeSchema=new mongoose.Schema({
    username:{
        type:String
    },
    code:{
        type:String
    },
    extension:{
        type:String
    },
    language:{
        type:String
    },
    socketId:{
        type:String
    }
})

const Code=new mongoose.model("code",codeSchema);
module.exports=Code;