var express = require('express');
var router = express.Router();
const models = require("../models");

router.get('/login', function (req, res, next) {
  res.render('user/login', {
    title: '로그인 - 모두의 호텔리어'
  });
});

router.get('/passwdResetStart', function (req, res, next) {
  res.render('user/passwdResetStart', {
    title: '비밀번호 찾기 - 모두의 호텔리어'
  });
});

router.get('/join', function(req, res, next) {
  res.render("user/join");
});

router.post("/join", function(req,res,next){
  let body = req.body;

  models.user.create({
    name: body.userName,
    email: body.userEmail,
    password: body.password
  })
  .then( result => {
    res.redirect("/user/join");
  })
  .catch( err => {
    console.log(err)
  })
})

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/user/join', function (req, res, next) {
//   res.render('join', {
//     title: '회원가입 - 모두의 호텔리어'
//   });
// });

// router.get('/join', function(req, res, next) {
//   res.render("user/join");
// });

// router.post("/join", function(req,res,next){
//   let body = req.body;

//   models.user.create({
//     name: body.userName,
//     email: body.userEmail,
//     password: body.password
//   })
//   .then( result => {
//     res.redirect("/users/join");
//   })
//   .catch( err => {
//     console.log(err)
//   })
// })

module.exports = router;