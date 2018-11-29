var jCookie = {
	create : function(cookie_name,cookie_value){
		if(typeof cookie_value ==="array"){
			Cookies.set(cookie_name,jCookie.array2json(cookie_value),{expires : 2});
			
		}else if(typeof cookie_value ==="object"){
			Cookies.set(cookie_name,cookie_value,{expires : 2});
			
		}else{
			console.log("Please pass Array or object")
		}
	},
	read : function(cookie_name){
		return JSON.parse(Cookies.get(cookie_name));
	},
	array2json : function(cookie_value){     
		return JSON.stringify(cookie_value);
	},
	exists : function(cookie_name){
		if(typeof Cookies.get(cookie_name) === 'undefined' ) {
			console.log('No cookie.');
			return false;
		}else{
			console.log('cookie found.');
			return true;
		};
	}
	
}