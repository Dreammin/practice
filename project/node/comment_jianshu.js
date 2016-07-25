var http = require("http");
var querystring = require('querystring');

var postData = querystring.stringify({
	"utf8":"✓",
	"comment[content]":"加油, fighting!",
	"commit":"发 表"
});

var options = {
	hostname:'www.jianshu.com',
	port: 80,
	path:'/notes/4224539/comments',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'remember_user_token=W1syMDc1NjczXSwiJDJhJDEwJDJjVUt2VWVGMFBjMGdIUVlHNXhYZWUiLCIxNDY2MDAyODI4LjUyMzIyMyJd--6b690a319bea0deedcbc9ef5f5f646f239c966bd; read_mode=day; default_font=font2; __utmt=1; Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1465028618,1465097828,1466002740,1466480188; Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1466480210; __utma=194070582.949354763.1462971082.1466002740.1466480188.23; __utmb=194070582.3.10.1466480188; __utmc=194070582; __utmz=194070582.1463206866.2.2.utmcsr=bing|utmccn=(organic)|utmcmd=organic|utmctr=%e7%ae%80%e4%b9%a6%e7%bd%91; __utmv=194070582.|2=User%20Type=Member=1; _session_id=Y1hjV2FMVDcwQVhNSGs0L3JPelRHei9SQ2pIQU1jUHcxSlhUMG03ZXYrTWp2WjZ1UlNmTHBuVHlMZklBYjBlNnkrYWVaUzFiNm1NUmpPY21iZUp0eUorZVcwYWhSdWVTM2Q3TkcvTm5BeVVrWWJRcWJQVnRFUmRIQ3lYWXJNcGJMWnZyL3dZU2N3eFZOZHM0ZG9kNk5PcjhDaURleHNyc1BGV1E5aEtFV3R5TGkrbHF1WjNjTXdrZ3dPRGhxMEVQRXY4NjBCQ1dzVVNTVlBaWDF4TEF0M1E5bmk5Q0NBOWdFRXdpVHRzUlBxWVQwK1A2ellhUlJCSXJnb2NaNkpld0NiT3ArMUszNy9zTXBDeVpyaW9mV2Y3SlBQMDh0N1pKN0VPTWwxa1RORHh6TG5tTnZYYjlOTzg1YTNLMDdiZXFBSkZkSWdWQlByQXlqazdFa2NtdUNLVFp5dGQrNzdjWTJaNTNaOHI2dmE2bmVTS2dZd0lFRVdDWFhEL25TUThNTTlZc3l4L3M0YWRUVzRjcWJyWm5oR0hQM2N5d0tSRlZaM3puY3FROUxzbU5UTlVPUi9Nb1Eva0U3L2YzTWVQVG5uMjhiMHpKRVdwenZKYURoUVpxdVJGVzV3dDRaZHB2WXRzY0lWSW0yajg9LS1nZUZEd1ROR0F4a0d3YXVzaGVxK3Z3PT0%3D--0d347632f699cc9d98929f0905202f50bd90d362',
		'Host':'www.jianshu.com',
		'Origin':'http://www.jianshu.com',
		'Referer':'http://www.jianshu.com/p/812e115d357c',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36',
		'X-CSRF-Token':'wO4LMpcqq1Uc0yuoHQFOiK+d7p8ALhD9O0fSzQqZtTN38xx6v2L7mbXibnPTikfbqJbeIG86kkhN54RqXIKiQg==',
		'X-Requested-With':'XMLHttpRequest'
	}
}

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