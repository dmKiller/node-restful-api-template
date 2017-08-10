// # API routes
var express    = require('express'),
	router     = express.Router(),
	ctrl       = require('../serve/controller'),
	middleware = require('../serve/middleware');


//普通验证
var authenticatePublic  = [
		middleware.json_schema.validJson
	],
	//用户验证
	authenticatePrivate = [
		middleware.auth.validUser,
		middleware.json_schema.validJson
	];

//
// router.get('/api/user/:id', authenticatePrivate ,function (req, res, next) {
// 	res.json({status: 200, message: "这是一个获取用户信息的接口", data:[]});
// });

router.get('/api/user/:id', authenticatePrivate, ctrl.user.getInfo);
router.post('/api/user/login', authenticatePrivate, ctrl.user.login);

module.exports = router;
