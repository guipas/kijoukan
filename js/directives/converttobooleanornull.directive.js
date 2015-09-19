(function () {


	angular
	.module('kijoukan')
		.directive('convertToBooleanOrNull', convertToBooleanOrNull);

	function convertToBooleanOrNull() {
		return {
		    require: 'ngModel',
		    link: function(scope, element, attrs, ngModel) {
		      ngModel.$parsers.push(function(val) {
		      	if(val==="true")
		        	return true;
		        else if (val==="false")
		        	return false;
		        else return "maybe";
		      });
		      ngModel.$formatters.push(function(val) {
		      	if(val===true) return "true";
		      	else if(val===false) return "false";
		      	else return "maybe";
		      });
		    }
		  };
	}

})();
