/**
 * 用户信息验证
 */
auth  = {

	validUser(req, res, next){
		console.log("对请求用户进行数据验证");
		next();
	}

};

module.exports = auth;