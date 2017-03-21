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
        $http.get('/api/v1/people.json').then(function(response) {
          $scope.people = response.data;
        });
      });
      $scope.person = {};
    };

    $scope.editPerson = function(person) {
      var personParams = {
        id: person.id,
        name: person.name,
        favoriteCity: person.favoriteCity
      };
      $http.put('/api/v1/people/' + person.id + '.json', personParams).then(function(response) {
        if(response.data)
          $scope.msg = 'Person was Successfully Updated';
        }, function(response) {
          $scope.msg = 'Something went wrong, please try again.';
        });
    };

    $scope.deletePerson = function(person) {
      var index = $scope.people.indexOf(person);
      $http.delete('/api/v1/people/' + person.id + '.json').then(function(response) {
        $scope.people.splice(index, 1);
      });
    };
  }]);
})();
