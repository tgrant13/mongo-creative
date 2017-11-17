angular.module('Save', [])
.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	$scope.goals = [];
	$scope.goals.push({title: "car", total: "1000", balance:"5", percentage: '100%', color: "green"});
	$scope.addGoal = function() {
		var per = ($scope.balance / $scope.total) * 100
		var x = Math.round((per * 100) / 100)
		var p = x.toString() + '%'
		var newGoal = {title:$scope.title, total:$scope.total, balance:$scope.balance, percentage:x, add: 0, color: 'red'};
		$scope.title = "";
		$scope.total = "";
		$scope.balance = "";


		$http.post("/addGoal", newGoal).success(function(data){
			$scope.goals.push(data);
		});
	};

	$scope.addFunds = function(goal) {
		console.log(goal);
		return $http.put('/totals/' + goal._id + '/updateBalance', goal)
		.success(function(data){
			console.log("addFunds worked");
			console.log(data.balance);
			goal.balance = data.balance;
			per = (goal.balance / goal.total) * 100
			perAdj = Math.round((per * 100) / 100)
			
			if(goal.percentage >= 100){
				goal.color = "green"
			}
			goal.percentage = perAdj.toString() + '%'
		});
		$scope.getAll();
	};

	$scope.updateBalance = function(goal) {
		console.log(goal.funds);
		goal.add = goal.funds;
		console.log(goal);
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