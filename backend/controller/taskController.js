const secretKey = require('../configs/keys').secretKey;

const verifyToken = (req, res, next) => {
    const { token } = req.cookies;
    jwt.verify(token, secretKey, {}, (err, info) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Please login to perform this action"
            });
        }
        req.userInfo = info;
        next();
    });
};