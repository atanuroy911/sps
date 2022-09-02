var express = require('express');
var router = express.Router();

var parkingRouter = require('./Parking/parking')
var parkingGetRouter = require('./Parking/parking-get')

router.use('/parking', parkingRouter)
router.use('/parking-data', parkingGetRouter)

// Login Attempt
router.post('/login', function (req, res, next) {
  const { userName, password } = req.body.data;
  if (userName == 'admin' && password == 'admin') {
    res.json({
      auth: true
    })
  }else{
    res.json({
      auth: false
    })
  }
})
/* POST attend */
router.post('/attend', function (req, res, next) {
  const { slot } = req.body.data;
});

module.exports = router;
