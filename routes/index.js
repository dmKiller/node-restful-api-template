var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '宁波普天，Restful API 服务',desc:'Design by SongTao' });
});

router.get('/info', function(req, res, next) {
  res.render('info', {});
});
//
// router.get('/api', function(req, res) {
//   res.json({status: 200, message: "这是一个J2222SON接口", data:[]});
// });

module.exports = router;
