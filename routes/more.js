var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/notice', function (req, res, next) {
    res.render('more/notice', {
        title: '공지사항 - 모두의 호텔리어'
    });
});

router.get('/event', function (req, res, next) {
    res.render('more/event', {
        title: '이벤트 - 모두의 호텔리어'
    });
});

router.get('/project', function (req, res, next) {
    res.render('more/project', {
        title: '혁신 프로젝트 - 모두의 호텔리어'
    });
});

router.get('/faq', function (req, res, next) {
    res.render('more/faq', {
        title: '자주 묻는 7가지 질문 - 모두의 호텔리어'
    });
});

router.get('/inquiry', function (req, res, next) {
    res.render('more/inquiry', {
        title: '나의 문의 내역 - 모두의 호텔리어'
    });
});

router.get('/terms', function (req, res, next) {
    res.render('more/terms', {
        title: '이용약관 - 모두의 호텔리어'
    });
});

router.get('/terms/location', function (req, res, next) {
    res.render('more/location', {
        title: '위치기반 서비스 이용약관 - 모두의 호텔리어'
    });
});

router.get('/terms/privacy', function (req, res, next) {
    res.render('more/privacy', {
        title: '개인정보 처리방침 - 모두의 호텔리어'
    });
});

module.exports = router;