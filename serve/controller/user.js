var Mock = require('mockjs')
var user;
user = {

	/**
	 * 获取用户信息
	 */
	getInfo(req, res, next){
		var data = Mock.mock({
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'list|1-10': [{
				// 属性 id 是一个自增数，起始值为 1，每次增 1
				'id|+1': 1
			}],
			"number|123.10": 1.123,
			"imgUrl": Mock.Random.image('200x100')
		})
		res.json({status: 200, message: data, data:[]});
	},

	login(req, res, next){
		console.log(req.body);

		res.json({status: 200, message: "这是一个私人接口", data:[]});
	}
};

module.exports = user;