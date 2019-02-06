const db = require('../database');

class Comics {
    static retrieveAll(callback) {
        db.query('SELECT comic_name from comics', function (err, res) {
            if (err.error)
                return callback(err);
            callback(res);
        });
    }

    static insert () {
        db.query('INSERT INTO comics (comic_name) VALUES($1)', [comic], function (err, res){
            if(err.error)
                return callback(err);
            callback(res);
        });;
    }
}

module.exports = Comics;