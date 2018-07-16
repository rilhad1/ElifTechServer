const express = require('express');
const { update, create, remove, list } = require('../controllers/company/');

const router = express.Router();

router.get('/', list);
router.post('/', create);
router.put('/', update);
router.delete('/', remove);

module.exports = router;
