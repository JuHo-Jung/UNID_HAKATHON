const express = require('express');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const models = require('./models');
const config = require('./config/config')['mail'];
const router = express.Router();

router.post('/member', function(req, res, next) {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  req.body.point = 0;
  console.log(req.body);
  models.Member.create(req.body, {
    fields: ['university_id', 'name', 'nickname', 'password', 'telephone', 'point']
  })
  .then(() => res.status(201).end());
});

router.get('/member/:id', function(req, res, next) {
  models.Member.findByPk(req.params.id, {
    attributes: ['university_id', 'name', 'nickname', 'telephone', 'point']
  })
  .then(member => {
    if (member) res.json(member);
    else res.status(404).end();
  });
});

router.put('/member/:id', function(req, res, next) {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  models.Member.update(req.body, {
    fields: ['password', 'telephone'],
    where: { id: req.params.id }
  })
  .then(member => {
    if (member) res.status(200).end();
    else res.status(404).end();
  });
});

router.get('/login', function(req, res, next) {
  models.Member.findOne({
    where: {
      nickname: req.body.nickname
    }
  })
  .then(member => {
    if (member && bcrypt.compareSync(req.body.password, member.password)) {
      res.json({'id': member.id});
    }
    else res.status(404).end();
  });
});

router.post('/mail/send', function(req, res, next) {
  var transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: config.username,
      pass: config.password
    },
  })

  models.University.findOne({
    where: {
      mailpath1: req.body.email.split('@')[1]
    }
  })
  .then(univ => {
    if (univ) {
      var code = Math.floor(Math.random() * (999999 - 100000) + 100000);
      transport.sendMail({
        from: `Uni-D thon`,
        to: req.body.email,
        subject: '캠푸 서비스 인증 안내입니다.',
        text: `귀하의 인증번호 : ${code}`,
        html: `<b>귀하의 인증번호 : ${code}</b>`,
      });
  
      console.log(`귀하의 인증번호 : ${code}`);
      mailjson = {
        university_id: univ.id,
        email: req.body.email,
        authcode: code,
        starttime: Date.now()
      }
      models.Mail.create(mailjson, {
        fields: ['university_id', 'email', 'authcode', 'starttime']
      })
      .then(res.status(200).end());
    }
    else res.status(404).end();
  });
});

router.get('/mail/check', function(req, res, next) {
  models.Mail.findOne({
    where: {
      email: req.body.email
    },
    order: [['starttime', 'DESC']],
    attributes: ['authcode']
  })
  .then(mail => {
    res.status(200).json({check: mail.authcode == req.body.authcode});
  });
});

router.post('/restaurant', function(req, res, next) {
  
});

router.post('/menu', function(req, res, next) {
  
});

module.exports = router;
