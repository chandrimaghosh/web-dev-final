/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        vm.userId=$routeParams.userId;
        vm.pageId=$routeParams.pageId;
        vm.websiteId=$routeParams.websiteId;
        vm.widgetId=$routeParams.widgetId;
        var pageId = $routeParams.pageId;


        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;

        function init() {
            console.log("init called for widgetlist with page id"+vm.userId+"and websiteId"+vm.websiteId+vm.widgetId);
            vm.widgets = WidgetService.findWidgetsForPageId(pageId);
        }
        init();

        function getSafeHtml(widget) {
            return $sce.trustAsHtml(widget.text);
        }

        function getSafeUrl(widget) {
            var urlParts = widget.url.split("/");
            var id = urlParts[urlParts.length - 1];
            var url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);

        }
    }
})();