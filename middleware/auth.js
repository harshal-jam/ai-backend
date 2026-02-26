import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const authheader = req.header('Authorization');
    if (!authheader) {
      return res.status(404).json({ message: 'access denied' });
    }

    const token = authheader.split(' ')[1];
    if (!token) {
      return res.status(404).json({ message: 'token is missing' });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'authentication failed', error });
  }
};

export default auth;