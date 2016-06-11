/*Jordan Home Ctrl*/
(function() {
    'use strict';    
    angular
        .module('jordandemo')
        .ngcontroller('jordanHomeController', jordanHomeController);

    jordanHomeController.$inject = ['square'];


    function jordanHomeController(square) {
        var vm = this;
        vm.welcome = "Landed to home page";
    }
    
})();
