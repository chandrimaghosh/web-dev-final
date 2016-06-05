/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController);
    function EditPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;
        vm.deletePage = deletePage;
        vm.updatePage = updatePage;
        function init() {

           PageService.findPageById(vm.pageId)
               .then(function (response) {
                   vm.page =response.data;

               })
        }

        init();
        function deletePage(pageId) {
             PageService.deletePage(pageId)
                 .then(
                     function (response) {
                         var result =response.data;
                         if (result) {
                             $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                         } else {
                             vm.error = "Unable to delete page";
                         }


                     }
                 );


        }

        function updatePage(name, title) {

           PageService.updatePage(vm.pageId, name, title)
               .then(function (response) {
                   var result=response.data
                   if (result) {
                       $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                   } else {
                       vm.error = "Unable to delete page";
                   }


               });

        }
    }
})();