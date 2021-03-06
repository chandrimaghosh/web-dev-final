/**
 * Created by chandrimaghosh on 5/28/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);
    function WidgetListController($sce, $routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.pageId = $routeParams.pageId;
        vm.websiteId = $routeParams.websiteId;
        vm.widgetId = $routeParams.widgetId;
        var pageId = $routeParams.pageId;
        vm.getSafeHtml = getSafeHtml;
        vm.getSafeUrl = getSafeUrl;
        vm.sortWidget=sortWidget;
        function init() {
              WidgetService.findWidgetsForPageId(pageId)
                  .then(
                      function (response) {
                          vm.widgets=response.data;

                          $(".container")   
                              .sortable({axis: "y"});

                      }
                  );
        }

        init();

        function getSafeHtml(widget) {
            return $sce.trustAsHtml(widget.text);
        }

        function sortWidget(start, end) {
            console.log("***********start**************",start);
            console.log("******end*****",end);
            WidgetService
                .sortWidget(vm.websiteId, vm.pageId, start, end)
                .then(
                    function (response) {
                        init();
                    },
                    function (err) {
                        vm.error = err;
                    }
                );
        }

        function getSafeUrl(widget) {
            var urlParts = widget.url.split("/");
            var id = urlParts[urlParts.length - 1];
            var url = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(url);
        }


    }


})();
