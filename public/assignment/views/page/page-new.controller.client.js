/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId=$routeParams.websiteId;
        vm.createPage = createPage;

        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);

        }
        init();
       
        function createPage(name,title) {
            console.log("name passed to service"+name);
            console.log("websiteid passed to service"+vm.websiteId);

            var newPage = PageService.createPage(vm.websiteId, name,title);
            console.log("what is new page"+newPage);

           
            if(newPage) {
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            } else {
                vm.error = "Unable to create Page";
            }
        }
    }
})();