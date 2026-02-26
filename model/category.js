import mongoose from 'mongoose';
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
export default mongoose.model('category',category);