/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);
    function EditWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.deleteWebsite = deleteWebsite;
        vm.updateWebsite = updateWebsite;
        function init() {
                 WebsiteService.findWebsiteById(vm.websiteId)
                 .then(function (response) {
                     vm.website =response.data;
                     console.log(vm.website);

                 });
        }

        init();
        function deleteWebsite(websiteId) {
            var result = WebsiteService.deleteWebsite(websiteId);
            if (result) {
                $location.url("/user/" + vm.userId + "/website");
            } else {
                vm.error = "Unable to delete website";
            }
        }

        function updateWebsite(name, desc) {
            WebsiteService.updateWebsite(vm.websiteId, name, desc)
                .then(
                    function (response) {
                        var result =response.data;
                        if (result) {
                            $location.url("/user/" + vm.userId + "/website");
                        } else {
                            vm.error = "Unable to update website";
                        }

                    }
                );

        }
    }
})();