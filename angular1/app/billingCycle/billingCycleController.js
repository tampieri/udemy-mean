(function(){
  angular.module('primeiraApp').controller('BillingCycleCtrl', [
    '$http',
    'msgs',
    BillingCycleController
  ])

  function BillingCycleController($http, msgs) {
    const vm = this
    const url = 'http://localhost:3003/api/billingCycle'

    vm.refresh = function(){
        $http.get(url).then(function (response) {
          vm.billingCycle = {}
          vm.billingCycles = response
        })
    }

    vm.create = function(){
<<<<<<< HEAD
      $http.post(url, vm.billingCycle).then(function (response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!!')
      }).catch(function(data){
        msgs.addError(data.errors)
=======
      const url = 'http://localhost:3003/api/billingCycle'
      $http.post(url, vm.billingCycle).then(function (response) {
        vm.billingCycle = {}
        console.log('Sucesso!')
>>>>>>> 4a687158cdcd3c2ddaef3e1bb92be0604c921eed
      })
    }

    vm.refresh()
  }
})()
