const express = require('express');
const { update, create, remove, list, findOne } = require('../controllers/company/');

const router = express.Router();

router.get('/', list);
router.get('/find', findOne);
router.post('/', create);
router.put('/', update);
router.delete('/', remove);

module.exports = router;
