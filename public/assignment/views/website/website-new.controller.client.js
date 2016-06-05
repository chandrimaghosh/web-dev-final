/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);
    function NewWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.createWebsite = createWebsite;
        function createWebsite(name, description) {
            console.log("nameis" +name);
           if(name)
           {

              WebsiteService.createWebsite(vm.userId, name, description)


                  .then(function (response) {
                   var newWebsite=response.data;

                if (newWebsite) {
                    $location.url("/user/" + vm.userId + "/website");
                } else {
                    console.log("this executes"+vm.error);
                    vm.error = "Unable to create website";
                }

                }
                
            );

        }

    else {vm.error="name is required"}
    }}
})();
