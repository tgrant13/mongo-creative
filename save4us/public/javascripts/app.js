angular.module('Save', [])
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.goals = [];
	$scope.goals.push({title: "car", total: "1000", balance:"5"});

	$scope.addGoal = function() {
		var newGoal = {title:$scope.title, total:$scope.total, balance:$scope.balance};
		$scope.title = "";
		$scope.total = "";
		$scope.balance = "";
		$http.post("/addGoal", newGoal).success(function(data){
			$scope.goals.push(data);
		});
	};

	$scope.updateBalance = function(goal) {

	}

}]);