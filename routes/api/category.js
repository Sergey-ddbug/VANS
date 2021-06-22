const express = require('express');
const router = express.Router();
const Category = require('../../models').Category;


router.get('/', async (req, res) => {
    const categories = await Category.findAll();

    res.json(categories)
});

module.exports = router;