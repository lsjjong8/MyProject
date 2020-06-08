const models = require('../models');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: '모두의 호텔리어'
  });
});

router.get('/product/home/2', function (req, res, next) {
  res.render('product2.ejs', {
    title: '호텔 예약 - 모두의 호텔리어'
  });
});

router.get('/product/srp', function (req, res, next) {
  res.render('srp', {
    title: '내주변 예약 - 모두의 호텔리어'
  });
});

router.get('/product/earlybird', function (req, res, next) {
  res.render('earlybird', {
    title: '페이백 - 모두의 호텔리어'
  });
});

router.get('/my/mypage', function (req, res, next) {
  res.render('mypage', {
    title: '내 정보 관리 - 모두의 호텔리어'
  });
});

router.get('/my/point', function (req, res, next) {
  res.render('point', {
    title: '포인트 - 모두의 호텔리어'
  });
});

router.get('/my/coupon', function (req, res, next) {
  res.render('coupon', {
    title: '쿠폰함 - 모두의 호텔리어'
  });
});

router.get('/my/reserveList', function (req, res, next) {
  res.render('reserveList', {
    title: '예약내역 - 모두의 호텔리어'
  });
});

router.get('/my/recentrooms', function (req, res, next) {
  res.render('recentrooms', {
    title: '최근 본 숙소 - 모두의 호텔리어'
  });
});

router.get('/b2b/intro', function (req, res, next) {
  res.render('intro', {
    title: '비즈니스 페이지 - 모두의 호텔리어'
  });
});

router.get('/more/notice', function (req, res, next) {
  res.render('notice', {
    title: '공지사항 - 모두의 호텔리어'
  });
});

router.get('/more/event', function (req, res, next) {
  res.render('event', {
    title: '이벤트 - 모두의 호텔리어'
  });
});

router.get('/more/project', function (req, res, next) {
  res.render('project', {
    title: '혁신 프로젝트 - 모두의 호텔리어'
  });
});

router.get('/more/faq', function (req, res, next) {
  res.render('faq', {
    title: '자주 묻는 7가지 질문 - 모두의 호텔리어'
  });
});

router.get('/more/inquiry', function (req, res, next) {
  res.render('inquiry', {
    title: '나의 문의 내역 - 모두의 호텔리어'
  });
});

router.get('/more/terms', function (req, res, next) {
  res.render('terms', {
    title: '이용약관 - 모두의 호텔리어'
  });
});

router.get('/more/terms/location', function (req, res, next) {
  res.render('location', {
    title: '위치기반 서비스 이용약관 - 모두의 호텔리어'
  });
});

router.get('/more/terms/privacy', function (req, res, next) {
  res.render('privacy', {
    title: '개인정보 처리방침 - 모두의 호텔리어'
  });
});

// 게시글 목록
// router.get('/board', function(req, res, next) {
//   models.post.findAll()
//   .then( result => {
//     models.post.findOne({
//       include: {
//         model: models.reply,
//         where: {postId: 1}
//       }
//     })
//     .then( result2 => {
//       console.log(result2.replies)
//     })
//   })
//   .catch(function(err){
//     console.log(err);
//   });
// });

// 게시글 목록
router.get('/board', async function(req, res, next) {
  let result = await models.post.findAll();
  if (result){
    for(let post of result){
      let result2 = await models.post.findOne({
        include: {
          model: models.reply,
          where: {
            postId: post.id
          }
        }
      })
      if(result2){
        post.replies = result2.replies
      }
    } 
  }
  res.render("show", {
    posts : result
  });
});

router.get('/board', function (req, res, next) {
  models.post.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
    .then(result => {
      res.render("show", {
        posts: result
      });
    })
    .catch(function (err) {
      console.log(err);
    });
});

// 게시글 등록
router.post('/board', function(req, res, next) {
  let body = req.body;

  models.post.create({
    title: body.inputTitle,
    writer: body.inputWriter
  })
  .then( result => {
    console.log("데이터 추가 완료");
    res.redirect("/board");
  })
  .catch( err => {
    console.log("데이터 추가 실패");
  })
});

// 게시글 조회
router.get('/board/:id', function(req, res, next) {
  let postID = req.params.id;

  models.post.findOne({
    where: {id: postID}
  })
  .then( result => {
    res.render("edit", {
      post: result
    });
  })
  .catch( err => {
    console.log("데이터 조회 실패");
  });
});

// 게시글 수정
router.put('/board/:id', function(req, res, next) {
  let  postID = req.params.id;
  let body = req.body;

  models.post.update({
    title: body.editTitle,
    writer: body.editWriter
  },{
    where: {id: postID}
  })
  .then( result => {
    console.log("데이터 수정 완료");
    res.redirect("/board");
  })
  .catch( err => {
    console.log("데이터 수정 실패");
  });
});

// 게시글 삭제
router.delete('/board/:id', function(req, res, next) {
  let postID = req.params.id;

  models.post.destroy({
    where: {id: postID}
  })
  .then( result => {
    res.redirect("/board")
  })
  .catch( err => {
    console.log("데이터 삭제 실패");
  });
});

// 댓글 등록
router.post("/reply/:postID", function(req, res, next){
  let postID = req.params.postID;
  let body = req.body;

  models.reply.create({
    postId: postID,
    writer: body.replyWriter,
    content: body.replyContent
  })
  .then( results => {
    res.redirect("/board");
  })
  .catch( err => {
    console.log(err);
  });
});

module.exports = router;