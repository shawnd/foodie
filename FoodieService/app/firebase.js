var express = require('express');
var router = express.Router();
var Firebase = require('../models/Firebase');

router.use(function(req, res, next) {
    console.log('Request id', Math.random());
    next();
});

router.get('/', function(req, res) {
    var query = req.query;
    console.log(query);
    res.json({ message: 'firebase!', queryString: query });
});

router.route('/recipes/:id')
    .get(function(req, res) {
        console.log(req.params.id);
        Firebase.getRecipe(req.params.id)
            .then(function(data) {
                console.log(data);
                res.send(data);
            })
            .catch(function(error) {
                console.log(error);
                res.send(error);
            });
    })
    .post(function(req, res) {
        //Firebase.getRecipe(req.params.id, req.body.lat, req.body.long);
        res.send("thanks!");
    });

module.exports = router;