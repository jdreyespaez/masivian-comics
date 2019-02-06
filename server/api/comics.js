var express = require('express');
var Comics = require('../models/comics');

var router = express.Router();

router.get('/', function (req, res) {
    Comics.retrieveAll(function (err, comics) {
        if (err)
            return res.json(err);
        return res.json(comics);
    });
});

router.post('/', function (req, res) {
    var xkcd = req.body.xkcd;

    Comics.insert(xkcd, function (err, result) {
        if (err)
            return res.json(err);
        return res.json(result);
    });
});

module.exports = router;