/**
 * Created by chandrimaghosh on 5/29/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetChooserController", WidgetChooserController);
    function WidgetChooserController($sce, $routeParams, $location, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;
        var pageId = $routeParams.pageId;
        vm.chooseEdit = chooseEdit;
        vm.youtube = "youtube";
        vm.header = "header";
        vm.image = "image";
        vm.html="html";
        vm.text="text";
        function chooseEdit(wType) {
            console.log("edit");
            console.log(wType);
            if (wType === "youtube") {
                  WidgetService.createWidgetTypeandId("YOUTUBE", vm.pageId)
                      .then(function (response) {
                          var widget =response.data;
                          var widgetId=widget._id;
                          $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widgetId + "");


                      });

            }
            if (wType === "header") {
                console.log("header");
                 WidgetService.createWidgetTypeandId("HEADER", vm.pageId)
                     .then(function (response) {
                         var widget =response.data;
                         var widgetId=widget._id;
                         console.log("trying to fix this"+widgetId);
                         $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widgetId + "");

                     });
            }
            if (wType === "image") {
                console.log("image");
                WidgetService.createWidgetTypeandId("IMAGE", vm.pageId)
                    .then(
                        function (response) {
                            var widget =response.data;
                            var widgetId=widget._id;
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widgetId + "");


                        }
                    );
            }

            if (wType === "html") {
                console.log("html");
                WidgetService.createWidgetTypeandId("HTML", vm.pageId)
                    .then(
                        function (response) {
                            var widget =response.data;
                            var widgetId=widget._id;
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widgetId + "");


                        }
                    );
            }
            if (wType === "text") {
                console.log("html");
                WidgetService.createWidgetTypeandId("INPUT", vm.pageId)
                    .then(
                        function (response) {
                            var widget =response.data;
                            var widgetId=widget._id;
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widgetId + "");


                        }
                    );
            }
        }
    }
})();
