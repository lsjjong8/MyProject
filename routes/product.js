var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/search/:id', async function (req, res, next) {
  let session = req.session;
  let divisionID = req.params.id;
  let result = await models.Accommodations.findAll();

  try {
    if (result) {
      // for (let accommodation of result) {
      //   let result2 = await models.address.findOne({
      //     where: {
      //       id: accommodation.addressId
      //     }
      //   });
      //   if (result2) {
      //     accommodation.addressName = result2.addressName;
      //   }
      // }
    }
  } catch (e) {
    console.log(e);
  }

  if (divisionID == 1) {
    res.render("product/search", {
      title: '호텔 예약 - 모두의 호텔리어',
      session: session,
      accommodations: result
    });
  }

  res.redirect("/");

});

router.get('/srp', function (req, res, next) {
  let session = req.session;

  res.render('product/srp', {
    title: '내주변 예약 - 모두의 호텔리어',
    session: session
  });
});

router.get('/earlybird', function (req, res, next) {
  let session = req.session;

  res.render('product/earlybird', {
    title: '페이백 - 모두의 호텔리어',
    session: session
  });
});

router.get('/detail', function (req, res, next) {
  let session = req.session;

  res.render('product/detail', {
    title: '호텔명 - 모두의 호텔리어',
    session: session
  });
});

router.get('/detail', function (req, res, next) {
  let session = req.session;

  res.render('product/detail', {
    title: '호텔명 - 모두의 호텔리어',
    session: session
  });
});

module.exports = router;