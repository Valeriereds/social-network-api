const router = require('express').Router();
const thotRoutes = require('./thotRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughts', thotRoutes);
router.use('/users', userRoutes);

module.exports = router;