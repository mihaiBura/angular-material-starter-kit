function HomeCtrl() {
  var vm = this;
  vm.title = "My App's Fancy Title. Found in HomeCtrl"
}

HomeCtrl.$inject = [];

angular.module('costIncomeApp').controller('HomeCtrl', HomeCtrl);
