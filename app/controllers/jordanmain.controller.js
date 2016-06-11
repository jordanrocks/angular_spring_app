/*Jordan Main Ctrl*/
(function() {
    'use strict';    
    angular
        .module('jordandemo')
        .controller('jordanCtr', jordanCtr);

    function jordanCtr() {
        var vm = this;
        vm.welcome = "Landed to main page!";
    }
    
})();