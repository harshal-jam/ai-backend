
const userSchema = require('../model/users');
const bcrypt = require('bcrypt');
exports.Create = async (req, res) => {
    try {
        const { role, name, email, phone, password, status, last_login } = req.body;
        const hashpassword = await bcrypt.hash(password, 10);
        const user = await userSchema.create({
            role,
            name,
            email,
            phone,
            password: hashpassword, status, last_login
        })
        res.status(201).json({message:"created successfully",user})
    } catch (error) {
 console.log(error);
 res.status(404).json({message:" user failed",error})
    }
}