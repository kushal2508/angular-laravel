app.factory('tokenProp', function(){
	var tk = {};

	this.getToken = function () {
		return tk;
	}

	this.setToken = function (token) {
		tk = token;
	}

	return {
		getToken: this.getToken,
		setToken: this.setToken
	}
});