const mongoose = require('mongoose');
const category = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    category:{
        type:String,
        trim:true
    }
})
module.exports=mongoose.model('category',category);