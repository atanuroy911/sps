const express = require('express');
var router = express.Router();
var connection = require('../../db/connection');

router.post('/update', function (req, res, next) {
    let { parking = "NA", slot = "NA", car_plate = "GUEST", status = 0 } = req.body;
    if (parking !== "NA") {
        let sql = `UPDATE parking_${parking} SET status = ?, number_plate = ? WHERE slot_id = 'S${slot}'`;
        console.log(sql);
        connection.query(sql, [status, car_plate], function (err, results) {
            if (err) {
                res.send({ error: 'Database Error' })
                console.log("error", err);
            }
            else {
                res.send({ submit_status: 'success' })
                console.log("results", results)
            }
        });
    }
    else {
        res.send({ error: 'No Data Received' })
    }

})

module.exports = router;
