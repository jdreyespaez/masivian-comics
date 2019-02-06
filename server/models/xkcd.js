const request = require('request-promise');

class Xkcd {
    static retrieveByComicNumber (xkcd, callback) {
        request({
            uri: `https://xkcd.com/${xkcd}/info.0.json`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({ error: 'Could not reach xkcd Api.' });
        })
    }
}

module.exports = Xkcd;