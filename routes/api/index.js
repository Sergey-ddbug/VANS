const router = require('express').Router();
const userRoutes = require('./user');
const twilio = require('./twilio');
const categories = require('./category');

router.use('/users', userRoutes);
router.use('/video', twilio);
// video
router.use('/categories', categories);

module.exports = router;
