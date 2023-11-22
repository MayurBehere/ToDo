const Router = require('express');

const router = Router();
router.get('/get', getToDos);

module.exports = router;