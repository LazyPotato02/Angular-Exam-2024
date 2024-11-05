const express = require("express");
const userController = require("../controllers/userController");
const userRoutes = express.Router();
const authenticateSession = require('../middlewares/authSession');
const {verifySession} = require("../controllers/verifySession");

userRoutes.get('/verify', verifySession);
userRoutes.post('/login', userController.loginUser);
userRoutes.post('/register', userController.registerUser);
userRoutes.post('/logout',authenticateSession, userController.logoutUser);
userRoutes.put('/update',authenticateSession, userController.updateUser);
userRoutes.delete('/delete',authenticateSession, userController.deleteUser);

module.exports = userRoutes;