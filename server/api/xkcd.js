var express = require('express');
var Xkcd = require('../models/xkcd');

var router = express.Router();

router.get('/:xkcd', function (req, res) {
    var xkcd = req.params.number;

    Xkcd.retrieveByComicNumber(xkcd, function (err, xkcd) {
        if (err)
            return res.json(err);
        return res.json(xkcd);
    });
});

module.exports = router;