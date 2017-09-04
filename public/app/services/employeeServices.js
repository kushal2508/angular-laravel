app.factory('Emp', function($resource){
	
	return $resource('/api/employee/:empID', {empID: '@id'});
	/*var baseURL = '/employee';
	var dataFactory = {};

	dataFactory.deleteEmployee = function(id) {
		$http.delete(baseURL + '/delete/' + id);
	};

	return dataFactory;*/
})