(function () {
    'use strict';
    angular
        .module('jordandemo')
        .ngservice('square', square);

    function square() {
        return console.log('hi');

    }
    
})();