/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);
    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;
        function init() {


                PageService.findPageByWebsiteId(vm.websiteId)
                    .then(
                        function (response) {
                            vm.page =response.data;

                        }
                    );

        }
        init();
    }
})();
