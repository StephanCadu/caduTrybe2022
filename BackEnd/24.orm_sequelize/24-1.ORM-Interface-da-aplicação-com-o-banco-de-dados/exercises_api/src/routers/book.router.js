const express = require('express');
const BookController = require('../controllers/book.controller');

const router = express.Router();

router.get('/', BookController.getAll);

module.exports = router;