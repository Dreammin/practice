var http = require("http");
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'老师讲得好好~忍不住要试一下',
    'mid':'8837'
});

var options = {
	hostname:'www.imooc.com',
	port: 80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=9a7a4ed6-5033-4390-ac6b-a8b3be37e271; imooc_isnew_ct=1461752725; loginstate=1; apsid=IwZmIyYmIxYjcwMjdkNGJjMDQ5N2RkYzBiYTQxYzYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjE5NjQ0OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNTUzMDg1MjQzQHFxLmNvbQAAAAAAAAAAAAAAAAAAADMxZmM3YzA0OThjZTU3OTIwYWFhYjljODVhNjQwZTNlJr9iVya%2FYlc%3DYT; last_login_username=1553085243%40qq.com; PHPSESSID=5amo0qq0gto2sb37b04b2148i6; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1466232701,1466265440,1466304392,1466470340; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1466479530; imooc_isnew=2; cvde=57688fb64075b-35',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
};

var req = http.request(options,function(res){
	console.log("Status: " + res.statusCode);
	console.log("headers: " + JSON.stringify(res.headers));
	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});
	res.on('end',function() {
		console.log("评论完毕");
	});
});

	req.on('error',function(){
		console.log('Error: ' + e.message);
	});

	req.write(postData);
	req.end();