var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '모두의 호텔리어' });
});

router.get('/product/home/2', function(req, res, next) {
  res.render('product2.ejs', { title: '호텔 예약 - 모두의 호텔리어' });
});

router.get('/product/srp', function(req, res, next) {
  res.render('srp', { title: '내주변 예약 - 모두의 호텔리어' });
});

router.get('/product/earlybird', function(req, res, next) {
  res.render('earlybird', { title: '페이백 - 모두의 호텔리어' });
});

router.get('/user/login', function(req, res, next) {
  res.render('login', { title: '로그인 - 모두의 호텔리어' });
});

router.get('/user/join', function(req, res, next) {
  res.render('join', { title: '회원가입 - 모두의 호텔리어' });
});

router.get('user/passwdResetStart', function(req, res, next) {
  res.render('passwdResetStart', { title: '비밀번호 찾기 - 모두의 호텔리어' });
});


router.get('/user/login2', function(req, res, next) {
  res.render('login', { title: '로그인 - 모두의 호텔리어' });
});

router.get('/user/join2', function(req, res, next) {
  res.render('join', { title: '회원가입 - 모두의 호텔리어' });
});

router.get('user/passwdResetStart2', function(req, res, next) {
  res.render('passwdResetStart', { title: '비밀번호 찾기 - 모두의 호텔리어' });
});

router.get('/my/mypage', function(req, res, next) {
  res.render('mypage', { title: '내 정보 관리 - 모두의 호텔리어' });
});

router.get('/my/point', function(req, res, next) {
  res.render('point', { title: '포인트 - 모두의 호텔리어' });
});

router.get('/my/coupon', function(req, res, next) {
  res.render('coupon', { title: '쿠폰함 - 모두의 호텔리어' });
});

router.get('/my/reserveList', function(req, res, next) {
  res.render('reserveList', { title: '예약내역 - 모두의 호텔리어' });
});

router.get('/my/recentrooms', function(req, res, next) {
  res.render('recentrooms', { title: '최근 본 숙소 - 모두의 호텔리어' });
});

router.get('/b2b/intro', function(req, res, next) {
  res.render('intro', { title: '비즈니스 페이지 - 모두의 호텔리어' });
});

router.get('/more/notice', function(req, res, next) {
  res.render('notice', { title: '공지사항 - 모두의 호텔리어' });
});

router.get('/more/event', function(req, res, next) {
  res.render('event', { title: '이벤트 - 모두의 호텔리어' });
});

router.get('/more/faq/1', function(req, res, next) {
  res.render('faq1', { title: '자주 묻는 7가지 질문 - 모두의 호텔리어' });
});

router.get('/more/inquiry', function(req, res, next) {
  res.render('inquiry', { title: '나의 문의 내역 - 모두의 호텔리어' });
});

router.get('/more/terms', function(req, res, next) {
  res.render('terms', { title: '이용약관 - 모두의 호텔리어' });
});

router.get('/more/terms/location', function(req, res, next) {
  res.render('location', { title: '위치기반 서비스 이용약관 - 모두의 호텔리어' });
});

router.get('/more/terms/privacy', function(req, res, next) {
  res.render('privacy', { title: '개인정보 처리방침 - 모두의 호텔리어' });
});

module.exports = router;
