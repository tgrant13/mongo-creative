angular.module('Save', [])
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.goals = [];
	$scope.goals.push({title: "car", total: "1000", balance:"5"});

	$scope.addGoal = function() {
		var newGoal = {title:$scope.title, total:$scope.total, balance:$scope.balance, add: 0};
		$scope.title = "";
		$scope.total = "";
		$scope.balance = "";

		$http.post("/addGoal", newGoal).success(function(data){
			$scope.goals.push(data);
		});
	};

	$scope.addFunds = function(total) {
		return $http.put('/totals/' + total._id + '/updateBalance')
		.success(function(data){
			console.log("addFunds worked");
			console.log(data.balance);
			total.balance = data.balance;
		});
		$scope.getAll();
	};

	$scope.updateBalance = function(goal) {
		console.log($scope.additionalFunds);
		goal.add = $scope.additionalFunds;
		$scope.addFunds(goal);
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