var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/', function (req, res, next) {
    let session = req.session;

    res.redirect("more/notice");
});

router.get('/notice', function (req, res, next) {
    let session = req.session;

    res.render('more/notice', {
        title: '공지사항 - 모두의 호텔리어',
        session : session
    });
});

router.get('/event', function (req, res, next) {
    let session = req.session;
    
    res.render('more/event', {
        title: '이벤트 - 모두의 호텔리어',
        session : session
    });
});

router.get('/project', function (req, res, next) {
    let session = req.session;
    
    res.render('more/project', {
        title: '혁신 프로젝트 - 모두의 호텔리어',
        session : session
    });
});

router.get('/faq', function (req, res, next) {
    let session = req.session;
    
    res.render('more/faq', {
        title: '자주 묻는 7가지 질문 - 모두의 호텔리어',
        session : session
    });
});

router.get('/inquiry', function (req, res, next) {
    let session = req.session;
    
    res.render('more/inquiry', {
        title: '나의 문의 내역 - 모두의 호텔리어',
        session : session
    });
});

router.get('/terms', function (req, res, next) {
    let session = req.session;
    
    res.render('more/terms', {
        title: '이용약관 - 모두의 호텔리어',
        session : session
    });
});

router.get('/terms/location', function (req, res, next) {
    let session = req.session;
    
    res.render('more/location', {
        title: '위치기반 서비스 이용약관 - 모두의 호텔리어',
        session : session
    });
});

router.get('/terms/privacy', function (req, res, next) {
    let session = req.session;
    
    res.render('more/privacy', {
        title: '개인정보 처리방침 - 모두의 호텔리어',
        session : session
    });
});

module.exports = router;