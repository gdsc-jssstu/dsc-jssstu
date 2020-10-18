const router = require('express').Router()
const User = require('../../models/User');

router.post('/register', (req, res) => {
    res.send('register hit');
});

router.post('/login', (req, res) => {
    res.send('login hit');
});

module.exports = router;