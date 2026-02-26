import userSchema from '../model/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const Signup = async (req, res) => {
  try {
    const { role, name, email, phone, password, status, last_login } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);

    const user = await userSchema.create({
      role,
      name,
      email,
      phone,
      password: hashpassword,
      status,
      last_login,
    });

    res.status(201).json({ message: 'created successfully', user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'user failed', error });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userSchema.findOne({ email });

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: 'user not found, does not exist' });
    }

    const correctpassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!correctpassword) {
      return res.status(404).json({ message: 'password is incorrect' });
    }

    const token = jwt.sign(
      { id: existingUser.id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res
      .status(201)
      .json({ message: 'login successful', token, user: existingUser });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'login failed', error });
  }
};
export const logout = async (res,req) => {
  try {
    
  } catch (error) {
    console.log(error);
    
  }
}