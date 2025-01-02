const express = require('express');
const router = express.Router();
const { register, login, dashboard } = require('../controllers/UserControllers');
router.post('/register', register);       
router.post('/login', login);             
router.get('/dashboard', dashboard);  

module.exports = router;
