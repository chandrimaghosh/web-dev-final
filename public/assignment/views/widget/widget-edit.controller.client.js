(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);
    function WidgetEditController($sce, $routeParams, $location, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.pageId = $routeParams.pageId;
        vm.websiteId = $routeParams.websiteId;
        vm.widgetId = $routeParams.widgetId;
        vm.deleteWidget = deleteWidget;
        vm.updateWidget = updateWidget;
        var pageId = $routeParams.pageId;

        function init() {
            console.log("invoked edit controller");
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
        }

        init();
        function updateWidget(name, text, size, width, url) {
            console.log("updateWidetcalled");
            var result = WidgetService.updateWidget(vm.widgetId, name, text, size, width, url);
            if (result) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
            } else {
                vm.error = "Unable to update widget";
            }
        }

        function deleteWidget(widgetId) {
            var result = WidgetService.deleteWidget(widgetId);
            if (result) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
            } else {
                vm.error = "Unable to delete widget";
            }
        }
    }
})();
