angular.module('YokaiGuide')

.factory('Yokai', function($http, $q) {

    var collection;

    var url = 'data/yokai.json';

    var all = function() {

        var deferred = $q.defer();

        if (collection) {
            deferred.resolve(collection);
            return deferred.promise;
        }

        $http.get(url).then(function(resp) {

            collection = resp.data;
            deferred.resolve(resp.data);

        }, function(err) {

            alert('Error');

        });

        return deferred.promise;

    };

    var get = function(number) {

        var deferred = $q.defer();

        for (var i = 0; i < collection.length; i++) {

            if (collection[i].number == number) {
                var model = collection[i];
                deferred.resolve(model);
                break;
            }

        }

        return deferred.promise;

    };

    return {
        all: all,
        get: get
    }

});
