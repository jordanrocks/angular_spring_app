angular
    .module('jordandemo')
    .config(config);

function config($routeProvider, $controllerProvider) {
    'use strict';
    /*Creating a more synthesized form of service of $ controllerProvider.register*/
    angular
    .module('jordandemo')
    .registerCtrl = $controllerProvider.register;

    function loadScript(path) {
      var result = $.Deferred(),
      script = document.createElement("script");
      script.async = "async";
      script.type = "text/javascript";
      script.src = path;
      script.onload = script.onreadystatechange = function (_, isAbort) {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
             if (isAbort)
                 result.reject();
             else
                result.resolve();
        }
      };
      script.onerror = function () { result.reject(); };
      document.querySelector("head").appendChild(script);
      return result.promise();
    }

    function loader(arrayName){

        return {
          load: function($q){
                    var deferred = $q.defer(),
                    map = arrayName.map(function(name) {
                        return loadScript('app/controllers/'+name+".js");
                    });

                    $q.all(map).then(function(r){
                        deferred.resolve();
                    });

                    return deferred.promise;
            }
        };
    }
    /*routing begin*/
    $routeProvider
        .when('/home', {
            templateUrl: 'app/views/home.html',
            resolve: loader(['home.controller']),
            controller: 'jordanHomeController',
            controllerAs: 'hCtrl'
        })
    ;
    /*routing end*/
}