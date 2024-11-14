const Session = require('../models/sessions');

const verifySession = async (req, res) => {
    try {
        const sessionId = req.cookies['session-id'];
        if (!sessionId) {
            return res.status(200).json({ loggedIn: false, message: 'Session ID not found' });
        }

        const session = await Session.findOne({ sessionId });

        if (!session) {
            return res.status(200).json({ loggedIn: false, message: 'Invalid session' });
        }

        res.status(200).json({ loggedIn: true, message: 'Session is valid', userId: session.userId });
    } catch (error) {
        console.error('Error verifying session:', error);
        res.status(500).json({ loggedIn: false, message: 'Server error' });
    }
};

module.exports = {
    verifySession,
};