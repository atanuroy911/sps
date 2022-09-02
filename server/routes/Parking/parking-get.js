const express = require('express');
var router = express.Router();
var connection = require('../../db/connection');

router.get('/get/:id', function (req, res, next) {
    let sql = `SELECT * FROM parking_${req.params?.id}`;
    connection.query(sql, function (err, results) {
        if (err) {
            res.send({ error: 'Database Error' })
            console.log(err);
        }
        else {
            res.send(results)
        }
    });
})

module.exports = router;