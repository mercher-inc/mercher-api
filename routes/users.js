var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.json([
        {id: 0, firstName: "A"},
        {id: 1, firstName: "B"}
    ]);
});

module.exports = router;
