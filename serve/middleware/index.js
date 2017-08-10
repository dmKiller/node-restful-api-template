
//中间件

//例如验证数据

/**
 * ## Public API
 */
var middleware = {
	auth : require('./auth'),
	json_schema : require('./json-schema'),
}


module.exports = middleware;
