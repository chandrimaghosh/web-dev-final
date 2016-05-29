/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);

    function EditPageController($location,$routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId=$routeParams.pageId;
        vm.deletePage = deletePage;
        vm.updatePage=updatePage;

        function init() {
            console.log("Invoked Page Edit");
            console.log(vm.userId);
            console.log(vm.websiteId);
            console.log(vm.pageId);
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();


        function deletePage(pageId) {
            var result = PageService.deletePage(pageId);
            if(result) {
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            } else {
                vm.error = "Unable to delete page";
            }
        }


        function updatePage(name,title) {
            console.log("updatePage called with changed name"+name);
            console.log("updatePage called with changed name"+vm.pageId);
           var result=  PageService.updatePage(vm.pageId,name,title);
            if(result) {
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            } else {
                vm.error = "Unable to delete page";
            }

        }

    }
})();