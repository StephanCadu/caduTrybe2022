const express = require('express');
const BookController = require('../controllers/book.controller');

const router = express.Router();

router.get('/', BookController.getAll);

router.get('/:id', BookController.getById);

router.post('/', BookController.create);

router.put('/:id', BookController.update);

router.delete('/:id', BookController.remove);

module.exports = router;