/*factory be lazily load javascript script*/
/*assuming that one follows naming convention*/
(function () {
    'use strict';
    angular
        .module('jordandemo')
        .factory('loadFactory', loadFactory);

    function loadFactory() {
        return {
            loadObjects : loadObjects
        }
    }
    
    function loadScript(path) {
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

    function loadObjects(arrayName) {

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
    }
})();
    