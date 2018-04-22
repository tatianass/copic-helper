(function () {
    'use strict';

    /**
     * Implementing Copic controller
     * @author Tatiana Saturno
     */
    app.service("CopicService", [
        '$http', '$q',
        function ($http, $q) {
            var self = this;
            var deferred = $q.defer();

            $http.get('assets/json/colors.json').then(function(data){
                deferred.resolve(data.data);            
            });

            self.getList = function() {
                return deferred.promise;
            };
        }
    ]);
})();
