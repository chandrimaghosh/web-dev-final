/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);
    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.createPage = createPage;
        function init() {
             PageService.findPageByWebsiteId(vm.websiteId)
                 .then(
                     function (response) {
                         vm.pages =response.data;

                     }
                 );
        }

        init();
        function createPage(name, title) {
           if (name)
           {

             PageService.createPage(vm.websiteId, name, title)
                 .then(
                     function (response) {
                         var newPage =response.data;
                         console.log("this got created"+newPage.websiteId+newPage._id+newPage.name);
                         if (newPage) {
                             $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                         } else {
                             vm.error = "Unable to create Page";
                             vm.msg = {type: 'error', text: 'Page name required'};
                         }

                     },function (err) {
                         vm.msg = {type: 'error', text: 'Page name required'};

                     }
                 );



        }
           else {vm.error="name is required"
               vm.msg = {type: 'error', text: 'Page name required'};}
        }
    }
})();


