function CostService($http) {
  var costs = [];
  // CRUD
  var addCost = function(cost) {
    // Stub server call
    // $http({
    //   url: 'yourEndpoint'
    //   method: 'POST', //or get or delete or patch
    //   data: {
    //     payload: cost
    //   }
    // }).then(
    //   function success(res) {
    //     costs.push(res.data.cost);
    //   },
    //   function error(res) {
    //     console.log('hopa!');
    //   }
    // )
    costs.push(cost);
  };

  var getAllCosts = function() {
    return costs;
  };

  var updateCost = function(cost) {
    var idx = costs.indexOf(cost);
    if (idx !== -1) {
      costs[idx] = cost;
    }
  };

  var deleteCost = function(cost) {
      var idx = costs.indexOf(cost);
      if (idx !== -1) {
        costs.splice(idx, 1);
      }
  };

  return {
    createCost: addCost,
    readCost: getAllCosts,
    updateCost: updateCost,
    deleteCost: deleteCost
  };
};

CostService.$inject = ['$http'];

angular.module('costIncomeApp').service('CostService', CostService);
