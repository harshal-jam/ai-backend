const jwt = require('jsonwebtoken');
const auth = async (req,res,next) => {
    try {
        const authheader = req.header('Authorization');
        if (!authheader) {
            return res.status(404).json({message:"access denied"})
        }
        const token = authheader.split(" ")[1];
         if (!token) {
            return res.status(404).json({message:"token are removed"})
        } 
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"authentication failed",error})
    }
}
module.exports=auth;