var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/', function (req, res, next) {
  res.redirect("/my/mypage");
});

router.get('/mypage', function (req, res, next) {
  let session = req.session;  
  
  res.render('my/mypage', {
      title: '내 정보 관리 - 모두의 호텔리어',
      session : session
    });
  });
  
  router.get('/point', function (req, res, next) {
    let session = req.session;
    
    res.render('my/point', {
      title: '포인트 - 모두의 호텔리어',
      session : session
    });
  });
  
  router.get('/coupon', function (req, res, next) {
    let session = req.session;
    
    res.render('my/coupon', {
      title: '쿠폰함 - 모두의 호텔리어',
      session : session
    });
  });
  
  router.get('/reserveList', function (req, res, next) {
    let session = req.session;
    
    res.render('my/reserveList', {
      title: '예약내역 - 모두의 호텔리어',
      session : session
    });
  });
  
  router.get('/recentrooms', function (req, res, next) {
    let session = req.session;
    
    res.render('my/recentrooms', {
      title: '최근 본 숙소 - 모두의 호텔리어',
      session : session
    });
  });

module.exports = router;