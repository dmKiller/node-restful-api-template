/**
 * json数据验证
 */

jsonSchema  = {

	validJson(req, res, next){
		console.log("对请求数据进行验证");
		next();
	}

};

module.exports = jsonSchema;