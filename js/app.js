/* global angular */
(function () {
  angular.module('ToDoApp', ['ngMaterial'])
    .controller('ToDoController', ['$scope', function ($scope) {
      // Array of tasks
      $scope.tasks = [
        {
          title: 'Create this todo',
          done: true
        },
        {
          title: 'Pack backpack for trip',
          done: false
        }
      ]
      // Make the newTask equal to '' to avoid creating of empty item
      $scope.newTask = ''

      $scope.createTask = function () {
        if ($scope.newTask === '') return

        $scope.tasks.push({
          title: $scope.newTask,
          done: false
        })

        $scope.newTask = ''
      }

      $scope.clearCompleted = function () {
        $scope.tasks = $scope.tasks.filter(function (task) {
          return !task.done
        })
      }
    }])
}())
