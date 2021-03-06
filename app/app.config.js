/*
'use strict';
    Creating a more synthesized form of service of $ controllerProvider.register
    angular
        .module('jordandemo')
        .registerCtrl = $controllerProvider.register;
    controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service

*/



angular
    .module('jordandemo')
    .config(config);

function config($controllerProvider, $compileProvider, $filterProvider, $provide) {
    'use strict';
    /*Creating a more synthesized form of service of $ controllerProvider.register*/
    var jordandemoapp = angular.module('jordandemo');

    jordandemoapp.ngcontroller = $controllerProvider.register;
    jordandemoapp.ngdirective = $compileProvider.directive;
    jordandemoapp.ngfilter = $filterProvider.register;
    jordandemoapp.ngfactory = $provide.factory;
    jordandemoapp.ngservice = $provide.service;

}







    /*function loadScript(path) {
        var result = $.Deferred(), script = document.createElement("script");
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
        script.onerror = function () {
            result.reject();
        };
        document.querySelector("head").appendChild(script);
        return result.promise();
    }

    function loader(arrayName) {

        return {
            load: function ($q) {
                var deferred = $q.defer(),
                    map = arrayName.map(function (name) {
                    if (name.match('controller')){
                        return loadScript('app/controllers/' + name + ".js");
                    } else if(name.match('service')) {
                        return loadScript('app/services/' + name + ".js");
                    } else if(name.match('factory')) {
                        return loadScript('app/factories/' + name + ".js");
                    } else if(name.match('directive')) {
                        return loadScript('app/directives/' + name + ".js");
                    } else {
                        console.error('Please verify the name of the component and follow naming conventions!');
                        return null;
                    }
                });

                $q.all(map).then(function (r) {
                    deferred.resolve();
                });

                return deferred.promise;
            }
        };
    }*/
