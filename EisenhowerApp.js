    var app = angular.module('Eisenhower', []);
	
	app.controller('MainCtrl', function($scope) {
	$scope.todos = [];
	$scope.init = function(prio)
		{
			$scope.prio = prio;
			$scope.todos = JSON.parse(localStorage.getItem($scope.prio));
			if($scope.todos === null)	{
				$scope.todos = [];
			}
		};	
		
	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
    };
	
	$scope.save = function() {
		localStorage.setItem($scope.prio,JSON.stringify($scope.todos));
	};
	
	$scope.load = function() {
		$scope.todos = JSON.parse(localStorage.getItem($scope.prio));
		if($scope.todos === nil)	{
			$scope.todos = [];
		}
	};
	
	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
		count += todo.done ? 0 : 1;
		});
    return count;
    };
	
	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
		if (!todo.done) $scope.todos.push(todo);
		});
    };
});