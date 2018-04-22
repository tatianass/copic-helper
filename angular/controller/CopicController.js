(function () {
    'use strict';

    /**
     * Implementing Copic controller
     * @author Tatiana Saturno
     */
    app.controller("CopicController", [
        'CopicService',
        function (CopicService) {
            var self = this;
            var promise = CopicService.getList();
            
            promise.then(function (data){
                self.list = data;
            });
        }
    ]);
})();
