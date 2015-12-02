angular.module('costIncomeApp', ['ngMaterial', 'ui.router']);

angular.module('costIncomeApp').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/income");
  //
  // Now set up the states
  $stateProvider
    .state('cost', {
      url: "/cost",
      templateUrl: "app/components/cost/cost.html",
      controller: "CostCtrl as costCtrl"
    })
    .state('income', {
      url: "/income",
      templateUrl: "app/components/income/income.html",
      controller: "IncomeCtrl as incomeCtrl"
    });
});
