const router = require('express').Router();
const userRoutes = require('./user');
const twilio = require('./twilio');
const categories = require('./category');
const meetings = require('./post');

router.use('/users', userRoutes);
router.use('/video', twilio);
router.use('/meetings', meetings);
router.use('/categories', categories);

module.exports = router;