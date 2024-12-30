const path = require('path');
const express = require('express');
const router = express.Router();

const isLoggedIn = require('../middlewares/isLoggedIn');
const isLoggedOut = require('../middlewares/isLoggesOut');
const userController = require('../controller/user');


//render home page
router.get('/', userController.getHome);

//render signup page
router.get('/signup', isLoggedOut, userController.getSignup);

//render login page
router.get('/login', userController.getLogin);

//render profile page
router.get('/profile', isLoggedIn, userController.getProfile);

//destory user session and logout
router.get('/logout', isLoggedIn, userController.getLogout);

//Function to keep username unique and password hidden in db using bcrypt model 
router.post('/signup', isLoggedOut, userController.postSignup);

//Function to get login with password authentication
router.post('/login', isLoggedOut, userController.postLogin);

module.exports = router;