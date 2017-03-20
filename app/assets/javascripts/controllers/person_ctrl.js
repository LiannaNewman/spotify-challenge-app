(function(){
  'use strict';

  angular.module("app").controller('personCtrl', ['$scope', '$http', function($scope, $http) {
    function setup() {
      $http.get('/api/v1/people.json').then(function(response) {
        $scope.people = response.data;
      });
    }

    setup();

    $scope.addPerson = function(person) {
      $http.post('/api/v1/people.json', person).then(function(response) {
        $scope.people.push(person);
      });
      $scope.person = {};
    };

    $scope.editPerson = function(person) {
      var personParams = {
        id: person.id,
        name: person.name,
        favoriteCity: person.favoriteCity
      };
      $http.patch('/api/v1/people/' + person.id + '.json', personParams).success(success).error(error);
    };

    $scope.deletePerson = function(person) {
      var index = $scope.people.indexOf(person);
      $http.delete('/api/v1/people/' + person.id + '.json').then(function(response) {
        $scope.people.splice(index, 1);
      });
    };
  }]);
})();
