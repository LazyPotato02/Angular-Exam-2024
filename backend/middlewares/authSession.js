const Session = require('../models/sessions');
const User = require('../models/userData');

const authenticateSession = async (req, res, next) => {
    const sessionId = req.cookies['session-id'];

    if (!sessionId) return res.status(401).json({ message: 'Session ID required' });

    try {
        const session = await Session.findOne({ sessionId });

        if (!session) return res.status(403).json({ message: 'Invalid session' });

        req.user = await User.findById(session.userId);
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = authenticateSession;