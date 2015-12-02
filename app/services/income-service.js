function IncomeService($http) {
  var incomes = [];
  // CRUD
  var addIncome = function(income) {
    // Stub server call
    // $http({
    //   url: 'yourEndpoint'
    //   method: 'POST', //or get or delete or patch
    //   data: {
    //     payload: income
    //   }
    // }).then(
    //   function success(res) {
    //     incomes.push(res.data.income);
    //   },
    //   function error(res) {
    //     console.log('hopa!');
    //   }
    // )
    incomes.push(income);
  };

  var getAllIncomes = function() {
    return incomes;
  };

  var updateIncome = function(income) {
    var idx = incomes.indexOf(income);
    if (idx !== -1) {
      incomes[idx] = income;
    }
  };

  var deleteIncome = function(income) {
      var idx = incomes.indexOf(income);
      if (idx !== -1) {
        incomes.splice(idx, 1);
      }
  };

  return {
    createIncome: addIncome,
    readIncome: getAllIncomes,
    updateIncome: updateIncome,
    deleteIncome: deleteIncome
  };
};

IncomeService.$inject = ['$http'];

angular.module('costIncomeApp').service('IncomeService', IncomeService);
