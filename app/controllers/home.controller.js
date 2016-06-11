/*Jordan Home Ctrl*/
(function() {
    'use strict';    
    angular
        .module('jordandemo')
        .registerCtrl('jordanHomeController', jordanHomeController);

    function jordanHomeController() {
        var vm = this;
        vm.welcome = "Landed to home page";
    }
    
})();