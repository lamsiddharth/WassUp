import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === undefined) {
        return res.status(500).json({ message: "problem in finding authheader error from authMiddleware" });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(500).json({ message: "problem in finding authheader error from authMiddleware in jwtverify" });
        }
        req.user = user;
        next();
    });
};
export default authMiddleware;
