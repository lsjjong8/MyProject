var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/home', function (req, res, next) {
    res.render('product/product.ejs', {
      title: '호텔 예약 - 모두의 호텔리어'
    });
  });
  
  router.get('/srp', function (req, res, next) {
    res.render('product/srp', {
      title: '내주변 예약 - 모두의 호텔리어'
    });
  });
  
  router.get('/earlybird', function (req, res, next) {
    res.render('product/earlybird', {
      title: '페이백 - 모두의 호텔리어'
    });
  });

module.exports = router;