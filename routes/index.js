var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index.html', {
        title: 'Express'
    });

});

router.get('/data', function(req, res, next) {

    var urlbase = req.query.urlbase;
    var guid = req.query.guid;
    var key = req.query.key;

    if (!urlbase || !guid || !key) {
        res.status(400).json({
            'error': 'Por favor enviar guid y key'
        });
        return;
    }

    var limit = req.query.limit ? req.query.limit : '10';
    var url = urlbase + guid + '?auth_key=' + key + '&limit=' + limit;

    console.log('url: %s', url);
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(body);
            return;
        }
        console.log(error, response, body);
        res.json({
            'error': 'No se pudo realizar la consulta'
        });
        return;
    });


});

module.exports = router;