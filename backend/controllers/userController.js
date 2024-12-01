const User = require('../models/userData');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Session = require('../models/sessions');

const generateSessionId = () => {
    return crypto.randomBytes(16).toString('hex');
};

async function hashPassword(plainPassword) {
    const saltRounds = 10;
    try {
        return await bcrypt.hash(plainPassword, saltRounds);
    } catch (error) {
        console.error('Error hashing password:', error);
    }
}

async function verifyPassword(plainPassword, hashedPassword) {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.error('Error verifying password:', error);
    }
}

async function getUser(req, res) {
    const sessionId = req.cookies['session-id'];

    try {
        const userSession = await Session.findOne({sessionId});

        if (!userSession) {
            return res.status(404).json({message: 'Session not found'});
        }

        return {userId: userSession.userId};
    } catch (error) {
        console.error('Error fetching user session:', error);
        return {message: 'Error fetching session'};
    }
}

const registerUser = async (req, res) => {
    let {email, firstName, lastName, password} = req.body;
    const hashedPassword = await hashPassword(password);
    const user = new User({email, firstName, lastName, password: hashedPassword});

    try {
        const savedUser = await user.save();

        const sessionId = generateSessionId();
        const session = new Session({userId: savedUser._id, sessionId});
        await session.save();


        res.cookie('session-id', sessionId, {
            httpOnly: true,
            secure: false, // Change to true if you are using HTTPS in production
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({message: 'User not found'});
        }

        const isPasswordValid = await verifyPassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid password'});
        }

        const sessionId = generateSessionId();
        const session = new Session({userId: user._id, sessionId});
        await session.save();

        res.cookie('session-id', sessionId, {
            httpOnly: true,
            secure: false,
            sameSite: 'Strict',
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({message: 'Login successful'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const checkSession = async (req,res) =>{
    if (req.cookies['session-id']) {
        const sessionIsValid = true;

        if (sessionIsValid) {
            return res.status(200).json({ loggedIn: true });
        }
    }
    return res.status(200).json({ loggedIn: false });
}
const logoutUser = async (req, res) => {
    const sessionId = req.cookies['session-id']

    if (!sessionId) return res.status(401).json({ message: 'Session ID required' });

    try {
        await Session.deleteOne({ sessionId });

        res.clearCookie('session-id', {
            httpOnly: true,
            secure: false,
            sameSite: 'Strict',
        });

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

async function updateUser(req, res) {
    const retrieveUserId = await getUser(req, res);
    const userId = retrieveUserId.userId;

    let {email, firstName, lastName, password} = req.body;
    const hashedPassword = await hashPassword(password);

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, {
            email,
            firstName,
            lastName,
            password: hashedPassword
        }, {new: true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

async function deleteUser(req, res) {
    const sessionId = req.cookies['session-id'];
    const user = await getUser(req, res);
    const userId = user.userId;

    if (!sessionId) return res.status(401).json({message: 'Session ID required'});

    if (!user) {
        res.status(404).json({message: 'Invalid user'});
        console.log('Invalid user');
    }

    try {
        await User.findByIdAndDelete(userId);
        await Session.deleteOne({sessionId});
        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUser,
    deleteUser,
    updateUser,
};