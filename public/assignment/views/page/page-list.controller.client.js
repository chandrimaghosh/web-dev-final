/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId=$routeParams.pageId;


       

        function init() {
            console.log("Invoked");
            console.log( "userid on pagelistis"+vm.userId);
            console.log("websiteid on pagelistis"+vm.websiteId);
            

            vm.page = PageService.findPageByWebsiteId(vm.websiteId);
            console.log("this is vm.page"+vm.page);
        }
        init();

        
    }
})();