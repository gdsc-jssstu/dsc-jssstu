const router = require('express').Router();
const User = require('../../models/User');
const validators = require('../../utils/validators');

router.post('/register', async (req, res) => {
    let userObject = {
        email: req.body.email,
        name: req.body.name,
        secret: req.body.password,
    };
    
    // Validate User details
    const validatorResult = validators.registerValidator(userObject);
    if (validatorResult.error) 
        return res.json({
            "success" : false,
            "error": validatorResult.error.details[0].message
        });
    
    // Check if user already exists
    const isExistUser = await User.findOne({ where: { email: userObject.email }});
    if (isExistUser)
        return res.json({
            "success" : false,
            "error": "User with same email already exists"
        });
    
    // Add user to table
    const user = await User.create(userObject);
    res.json({
        "success" : true,
        "id" : user.id
    });
});

router.post('/login', (req, res) => {
    res.send('login hit');
});

module.exports = router;