angular.module('Save', [])
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.goals = [];
	$scope.goals.push({title: "car", total: "1000", balance:"5", percentage:75});

	$scope.addGoal = function() {
		var total = parseInt($scope.total);
		var balance = parseInt($scope.balance);
		var per = (balance / total) * 100;

		var newGoal = {title:$scope.title, total: $scope.total, balance: $scope.balance, percentage: per};
		$scope.title = "";
		$scope.total = "";
		$scope.balance = "";
		$http.post("/addGoal", newGoal).success(function(data){
			$scope.goals.push(data);
		});
	};

	$scope.updateBalance = function(goal) {

	}

	$scope.getAll = function() {
		return $http.get('/totals').success(function(data){
			angular.copy(data, $scope.goals);
		});
	};
	$scope.getAll();

	$scope.delete = function(total) {
		$http.delete('/totals/' + total._id).success(function(data){
			console.log("delete worked");
		});
		$scope.getAll();
	};
}]);