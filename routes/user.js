var express = require('express');
var router = express.Router();
const models = require("../models");
const crypto = require('crypto');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.redirect("/user/login");
});

router.get('/login', function (req, res, next) {
  let session = req.session;
  let queryURL = "/";

  queryURL = queryURL + req.query.returnUrl;

  if (session.email && queryURL) {
    res.redirect(queryURL);
  } else if (session.email) {
    res.redirect("/");
  } else {
    res.render("user/login", {
      title: '로그인 - 모두의 호텔리어'
    });
  }
});

// 로그인 POST
router.post("/login", async function (req, res, next) {
  let body = req.body;

  let result = await models.user.findOne({
    where: {
      email: body.userEmail
    }
  });

  let dbPassword = result.dataValues.password;
  let inputPassword = body.password;
  let salt = result.dataValues.salt;
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  if (dbPassword === hashPassword) {
    console.log("비밀번호 일치");
    // 세션 설정
    req.session.email = body.userEmail;
    res.redirect("/");
  } else {
    console.log("비밀번호 불일치");
    res.redirect("/user/login");
  }
});

// 로그아웃
router.get("/logout", function (req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect("/");
})

// 회원가입
router.get('/join', function (req, res, next) {
  let session = req.session;
  res.render("user/join", {
    title: '회원가입 - 모두의 호텔리어',
    session : session
  });
});

router.get('/passwdResetStart', function (req, res, next) {
  let session = req.session;

  res.render('user/passwdResetStart', {
    title: '비밀번호 찾기 - 모두의 호텔리어',
    session : session
  });
});

// 회원가입 post
router.post("/join", async function(req,res,next){
  let body = req.body;

  let inputPassword = body.password;
  let salt = Math.round((new Date().valueOf() * Math.random())) + "";
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  let result = models.user.create({
      name: body.userName,
      email: body.userEmail,
      password: hashPassword,
      salt: salt
  })

  res.redirect("/user/login");
})

module.exports = router;