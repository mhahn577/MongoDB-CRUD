"use strict";
var express = require("express");
var mongodb = require("mongodb");
var db_1 = require("../db");
var router = express.Router();
router.post('/', function (req, res) {
    var movie = req.body;
    movie._id = new mongodb.ObjectID(req.body.id);
    db_1.default.db.collection('movies').save(req.body).then(function (newMovie) {
        res.end();
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('movies').find().toArray().then(function (movies) {
        res.json(movies);
    });
});
router.delete('/:id', function (req, res) {
    var movieId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('movies').remove({ _id: movieId }).then(function () {
        res.end();
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
