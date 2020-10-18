const router = require('express').Router();
const User = require('../../models/User');
const validators = require('../../utils/validators');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname, '../../.env')});

router.post('/register', async (req, res) => {
    let userObject = {
        email: req.body.email,
        name: req.body.name,
        secret: req.body.password,
    };

    // Validate User details
    const validatorResult = validators.registerValidator(userObject);
    if (validatorResult.error)
        return res.status(400).json({
            "success": false,
            "error": validatorResult.error.details[0].message
        });

    // Check if user already exists
    const isExistUser = await User.findOne({ where: { email: userObject.email } });
    if (isExistUser)
        return res.status(400).json({
            "success": false,
            "error": "User with same email already exists"
        });

    // Add user to table
    const user = await User.create(userObject);
    res.json({
        "success": true,
        "id": user.id
    });
});

router.post('/login', async (req, res) => {
    const loginObject = {
        email: req.body.email,
        password: req.body.password
    }

    // Validate User details
    const validatorResult = validators.loginValidator(loginObject);
    if (validatorResult.error)
        return res.status(400).json({
            "success": false,
            "error": validatorResult.error.details[0].message
        });

    // Find User
    const user = await User.findOne({ where: { email: loginObject.email } });
    if (!user)
        return res.status(400).json({
            "success": false,
            "error": "User does not exist"
        });

    // Check if password hashes match
    const isValidPassword = await bcrypt.compare(loginObject.password, user.secret);
    if (!isValidPassword)
        return res.status(400).json({
            "success": false,
            "error": "Password is incorrect"
        });

    // Create JWT
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({
        "success": true,
        "user": {
            id: user.id,
            name: user.name
        }
    })
});

module.exports = router;