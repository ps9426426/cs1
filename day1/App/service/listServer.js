app.factory("listServer",["baseServer",function(baseServer){
	return {
		getData:function(){
			return baseServer.getJson("http://localhost:8050/data")
		}
	}
}])