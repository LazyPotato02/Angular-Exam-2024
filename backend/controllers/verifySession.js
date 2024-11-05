const Session = require('../models/sessions');

const verifySession = async (req, res) => {
    try {
        const sessionId = req.cookies['session-id'];
        if (!sessionId) {
            return res.status(401).json({ message: 'Session ID not found' });
        }

        const session = await Session.findOne({ sessionId });

        if (!session) {
            return res.status(401).json({ message: 'Invalid session' });
        }

        res.status(200).json({ message: 'Session is valid', userId: session.userId });
    } catch (error) {
        console.error('Error verifying session:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    verifySession,
};