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
            console.log("invoked edit controller"+vm.widgetId);
              WidgetService.findWidgetById(vm.widgetId)
                  .then(function (response) {
                      vm.widget=response.data;

                  });
        }

        init();
        function updateWidget(name, text, size, width, url,formatted,rows,placeholder) {
            if (name) {
                console.log("updateWidetcalled");
                WidgetService.updateWidget(vm.widgetId, name, text, size, width, url,formatted,rows,placeholder)
                    .then(
                        function (response) {
                            var result = response.data;
                            if (result) {
                                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                            } else {
                                vm.error = "Unable to update widget";
                                vm.msg = {type: 'error', text: 'Unable to update'};
                            }
                        },function (err) {

                            vm.msg = {type: 'error', text: 'Unable to update'};
                        }
                    );

            }
            else {
                vm.error="Please enter name"
                vm.msg = {type: 'error', text: 'widget name required'};
            }
        }

        function deleteWidget(widgetId) {
            WidgetService.deleteWidget(widgetId)
                .then(
                    function (response) {
                        var result=response.data;
                        if (result) {
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                        } else {
                            vm.error = "Unable to delete widget";
                        }

                    }
                );

        }
    }
})();
