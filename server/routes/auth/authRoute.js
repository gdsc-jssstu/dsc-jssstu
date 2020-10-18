const jwt = require('jsonwebtoken');
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});

module.exports = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).send('Unauthorized');
    
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        res.user = verified;
        next();
    } catch (err) {
        return res.status(401).send('Unauthorized');
    }
}