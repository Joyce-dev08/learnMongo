const jsonweb = require('jsonwebtoken');

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //check header
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.json({message: "unauthorised"})
}

const token = authHeader.split(' ')[1];
const decoded = jsonweb.verify(token, process.env.JWT_SECRET);

// attach user id
req.user = decoded

next();

}

module.exports = protect;