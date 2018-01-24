var gulp=require('gulp');
var webserver=require("gulp-webserver");
var path=require("path");
var fs=require("fs");

var getJson=function(res,filepath){
	fs.exists(filepath,function(exist){
		if(!exist)return 
			fs.readFile(filepath,function(err,data){
				if(err){
					return
				}
				res.end(data)
			})
	})
}
gulp.task("web",function(){
	gulp.src(".")
		.pipe(webserver({
			host:"localhost",
			port:8050,
			fallback:"index.html"
		}))
})

gulp.task("server",function(){
	gulp.src(".")
		.pipe(webserver({
			host:"localhost",
			port:8060,
			livereload:true,
			open:true,
			middleware:function(req,res,next){
				var filename=req.url.split("/")[1];
				var filepath=path.join(__dirname,"Data",filename+".json");
				res.writeHead(200,{
					"content-type":"text/json;charset=utf-8",
					"access-control-allow-origin":"*"
				})

				switch(req.url){
					case "/data":
						getJson(res,filepath)
						break;
				}
			}
		}))
})

gulp.task("default",["web","server"])