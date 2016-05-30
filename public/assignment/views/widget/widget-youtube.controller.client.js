/**
 * Created by chandrimaghosh on 5/29/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetYoutubeController", WidgetYoutubeController);

    function WidgetYoutubeController($sce, $routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        var pageId = $routeParams.pageId;



        function init() {


        }
        init();


    }
})();